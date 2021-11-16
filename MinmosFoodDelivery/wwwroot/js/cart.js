var productList = [];
var productIds = [];
var total = 0;

var action = (function () {

    var _updateCart = function () {
        if (total == 0) {
            $('#products').text('Cart Is Empty :(');
            $('#header-dot').css('opacity', '0');
        }
        else {
            $('#products').text(productList);
            $('#header-dot').css('opacity', '1');
        }
        $('#total').text(total + ' $');
        $('#header-cart').text(productIds.length);

        $('#label-address').css('display', 'inherit');
        $('#input-address').css('display', 'inherit');
        $('#label-tel').css('display', 'inherit');
        $('#input-tel').css('display', 'inherit');

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

        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '100px',
            duration: 1000,
            reset: false
        });

        srLeft.reveal('#label-address, #input-address', {
            interval: 100
        });

        const srRight = ScrollReveal({
            origin: 'right',
            distance: '100px',
            duration: 1000,
            reset: false
        });

        srRight.reveal('#label-tel, #input-tel', {
            interval: 100
        });

        var cart = $('#cart-toggle');
        if (cart.css('visibility') == 'hidden') {
            cart.css('visibility', 'visible');
        }
    }

    var _validateData = function (address, tel) {
        if (address == '') {
            alert('Delivery Address Is Required!');
            $('#order-products').attr('href', '#input-address');
            return false;
        }

        if (tel == '') {
            alert('Phone Number Is Required!');
            $('#order-products').attr('href', '#input-tel');
            return false;
        }

        var regex = /^07\d{8}$/;
        if (!regex.test(tel)) {
            alert('Phone Number Is Invalid!');
            return false;
        };

        return true;
    }

    var addOrder = function () {
        if (total == 0) {
            alert('Shopping Cart Is Empty!')
            return;
        }

        var userName = $("#user-order").text();
        var address = $("#input-address").val();
        var tel = $("#input-tel").val();

        if (!_validateData(address, tel)) {
            return;
        }

        userOrderDTO = JSON.parse(`{"UserName":"${userName}","ProductIds":"${productIds}","Total":"${total}","DeliveryAddress":"${address + ', ' + tel}"}`);

        $.ajax({
            type: "POST",
            url: "Orders/CreateFromCart",
            dataType: "json",
            data: userOrderDTO
        }).done(alert("Order placed!"),
            total = -1,
            window.location.href = "Orders/Index");
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

$(window).bind('beforeunload', function () {
    if (total > 0) {
        return 'Are you sure you want to leave?';
    }
});

$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
    });
});