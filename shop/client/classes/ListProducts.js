(function () {
    function ListProducts(state) {
        this.obj = JSON.parse(state);
        this.div = document.createElement('div');
        this.div.id = "listProducts";
        for (var i = 0; i < this.obj.length; i++) {
            var product = new Product(this.obj[i]);
            this.div.appendChild(product.div);
        }
        return this;
    }
    function Product(obj) {
        this.obj = obj;
        this.div = document.createElement('div');
        this.div.className = "product";
        this.div.setAttribute('id',obj['id']);
        this.div.innerHTML =
            '<img src="' + this.obj['src'] + '" width="200px">' +
            '<b>' + this.obj['name'] + '</b><br>' +
            '<small>' + this.obj['price'] + '</small>'; //+
            //'<button onclick="display.getContent(null, \'/details?id=' + +this.obj['id'] + '\', true)">Товар</button>';
        return this;
    }
    ListProducts.prototype.addListenerForAddCard = function () {
        var div = this.div.querySelectorAll("#listProducts .product");
            for (var i = 0; i < div.length; i++) {
                div[i].onclick = function(event) {
                    var id = this.getAttribute('id');
                    display.getContent(null,"/details?id=" + +id,true);
                    return false;
                };
            }


    };
    window.ListProducts = ListProducts;
})();