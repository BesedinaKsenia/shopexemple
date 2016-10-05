(function () {
    function Menu(state) {
        this.obj = JSON.parse(state);
        this.div = document.createElement('div');
        var nav = document.createElement('nav');
        this.div.id = "nav";
        var str='';
        for (var i = 0; i < this.obj.length; i++) {
            if(location.pathname + location.search == "/list?id=" + this.obj[i]['id']){
                str+=
                    '<a href = "/list?id=' + this.obj[i]['id'] +'" class="active" >' + this.obj[i]["name"] +'</a>';
            } else {
                str+=
                    '<a href = "/list?id=' + this.obj[i]['id'] +'" >' + this.obj[i]["name"] +'</a>';
            }
        }
        nav.innerHTML = str;
        this.div.appendChild(nav);
        return this;
    }
    Menu.prototype.addListenerForAddCard = function () {
        var a = this.div.querySelectorAll('#nav a');

        for (var i = 0; i < a.length; i++) {
            a[i].onclick = function(event) {
                if(event.target.nodeName != 'A') return;
                if(event.target.getAttribute("class")!="active"){
                    for (var j = 0; j < a.length; j++) {
                        a[j].removeAttribute("class");
                    }
                    event.target.setAttribute("class","active");
                    var href = event.target.getAttribute('href');
                    display.getContent(null,href,true);
                }
                return false;
            };
        }
    };

    window.Menu = Menu;
})();