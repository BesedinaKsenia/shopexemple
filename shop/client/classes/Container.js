
(function () {

    function Container(elem, idName) {
        this.container = elem.querySelector("#" + idName);
        return this;
    }

    Container.prototype.add = function (objectWithDiv) {
        this.container.appendChild(objectWithDiv.div);

        animate({
            duration: 500,
            timing: function (timeFraction) {
                return timeFraction;
            },
            draw: function (progress) {
                objectWithDiv.div.style.opacity = progress - 0.1;
            }
        });
    };
    Container.prototype.cleanInside = function () {
        while (this.container.firstChild)
            this.container.removeChild(this.container.firstChild);
    };



    window.Container = Container;
})();