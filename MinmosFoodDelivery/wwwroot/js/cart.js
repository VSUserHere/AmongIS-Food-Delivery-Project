var productList = [];
var total = 0;

var action = (function () {
    var toggle = function (name, price) {
        productList.push(name);
        total += price;
        $('#product').text(productList);
        $('#total').text(total + ' $');
        var cart = $('#cart-toggle');
        if (cart.css('visibility') == 'hidden') {
            cart.css('visibility', 'visible');
        }
    }
    return {
        toggle: toggle
    };
})();