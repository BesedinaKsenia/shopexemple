
(function () {

    function Cart(elem, idName) {
        this.card = elem.querySelector("#" + idName);
        return this;
    }
    Cart.prototype.setSizeCart = function () {
        this.card.innerHTML = '<span>' + getSizeCart("cart") + '</span>';
    };
    Cart.prototype.setCookie = function (href) {
        setCookieCart("cart", href.replace(/\//,''), 365);
    };
    window.Cart = Cart;
})();