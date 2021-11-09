var productList = [];
var productIds = [];
var total = 0;

var action = (function () {

    var _updateCart = function () {
        $('#products').text(productList);
        $('#total').text(total + ' $');
        $('#header-cart').text(productIds.length);

        productIds.forEach(function (id) {
            $('#remove-product-' + id).css('visibility', 'visible');
            $('#remove-product-' + id).css('cursor', 'pointer');
            $('#remove-product-' + id).text('Remove');
        });
    }

    var toggle = function (id, name, price) {
        productList.push(name);
        productIds.push(id);
        total += parseInt(price);

        _updateCart();

        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '35px',
            duration: 1000,
            reset: false
        });

        sr.reveal('#products, #total, #order-products', {
            interval: 100
        });

        var cart = $('#cart-toggle');
        if (cart.css('visibility') == 'hidden') {
            cart.css('visibility', 'visible');
        }
    }

    var addOrder = function () {
        if (total == 0) {
            alert('Shopping Cart Is Empty!')
            return;
        }

        var userName = $("#user-order").text();
        userOrderDTO = JSON.parse(`{"UserName":"${userName}","ProductIds":"${productIds}","Total":"${total}"}`);

        $.ajax({
            type: "POST",
            url: "Orders/Create",
            dataType: "json",
            data: userOrderDTO
        }).done(alert("Order placed!"),
            window.location.href = "Home/Index");
    }

    var removeProduct = function (id, name, price) {
        if (!productList.includes(name)) { return; }

        var index = productList.indexOf(name);
        if (index > -1) {
            productList.splice(index, 1);
        }

        index = productIds.indexOf(id);
        if (index > -1) {
            productIds.splice(index, 1);
        }

        $('#remove-product-' + id).css('visibility', 'hidden');
        $('#remove-product-' + id).css('cursor', 'auto');
        $('#remove-product-' + id).text('');

        total -= parseInt(price);

        _updateCart();
    }

    return {
        toggle: toggle,
        addOrder: addOrder,
        removeProduct: removeProduct
    };
})();
