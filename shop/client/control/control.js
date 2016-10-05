(function () {

    var cont;
    var menu;
    //var cart;
    function Display() {
        return this;
    }
    Display.prototype.init = function () {
        cont = new Container(document.body, "cont");
        menu = new Container(document.body, "menu");
        this.cart = new Cart(document.body, "cart");
        this.cart.setSizeCart();
        this.saveState1 = [];
        this.saveState2 = [];
    };

    Display.prototype.getMenu = function () {
        ajaxGET("/categories?&ajax=1", function (data) {
            var div = new Menu(data);
            div.addListenerForAddCard();
            menu.cleanInside();
            menu.add(div);
        });
    };
    Display.prototype.getContent = function (state, path, popstate) {

        var regForDetails = /\/details\?id=(\d+)/g;
        var regForListGoods = /\/list\?id=(\d+)/g;
        switch (true) {
            case isExist(path, regForDetails):

                var id = getID(path);
                var url = "details?id=" + id;
                update(this.saveState1[id], url, state, popstate, function (currentState) {
                    var div = new Details(currentState);
                    div.addListenerForAddCard();
                    return div;
                });
                back.style.visibility = "visible";
                break;
            case isExist(path, regForListGoods):
                var id = getID(path);
                var url = "list?id=" + id;
                update(this.saveState2[id], url, state, popstate, function (currentState) {
                    var div = new ListProducts(currentState);
                    div.addListenerForAddCard();
                    return div;
                });
                back.style.visibility = "visible";
                break;
            case isExist(path, /\//):
                cont.cleanInside();
                back.style.visibility = "hidden";
                break;
        }
        function update(saveState, url, state, popstate, currentDiv) {
            if (state) changeView(state);
            else if (saveState) changeView(saveState);
            else ajaxGET(url+'&ajax=1', function (data) {
                    saveState = data;
                    changeView(data);
                });
            function changeView(currentState) {
                if (popstate == true) {
                    history.pushState(currentState, null, url);
                }
                cont.cleanInside();
                cont.add(currentDiv(currentState));

            }
        }
    };

    function isExist(path, regular) {
        return regular.test(path) && path.match(regular).length == 1;
    }

    function getID(path) {
        return path.replace(/[^\d]/g, '');
    }


    window.Display = Display;
})();