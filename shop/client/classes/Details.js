(function () {
    function Details(state) {
        this.objOptions = JSON.parse(state);
        this.div = document.createElement('div');
        this.div.id = "details";
        this.div.innerHTML =
            '<div><img src="' + this.objOptions['src'] + '" width="300px"></div>' +
            '<div><p><b>' + this.objOptions['name'] + '</b><br>' +
            '<small>' + this.objOptions['price'] + '</small></p>'+
            '<div><a href = "/' + this.objOptions['id'] +'" id = "addCart">ADD CARD</a></div></div>';
        return this;
    }
    Details.prototype.addListenerForAddCard = function () {
        this.div.querySelector('#addCart').onclick = function (event) {
            if(event.target.nodeName != 'A') return;
            event.preventDefault();
            var href = event.target.getAttribute('href');
            display.cart.setCookie(href);
            display.cart.setSizeCart();
            return false;
        }
    };

    window.Details = Details;
})();