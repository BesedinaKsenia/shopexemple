
suite("Container", function() {

    var o;
    var elem;
    setup(function() {
        elem = document.createElement('div');
        elem.innerHTML='<div id="cont"></div>';
        o= {
            "fk_category":2,
            "id": 4,
            "name": "Mini Dress",
            "price": "1150 p."
        };
    });
    test("Конструктор", function() {
        var container = new Container(elem, "cont");

        assert(container);
        assert.equal(container.container,elem.querySelector("#cont"));
    });
    test(".addDetails([object HTMLDivElement])", function() {
        var container = new Container(elem, "cont");
        var details = new Details(JSON.stringify(o));
        container.add(details);

        assert.equal(details.div,elem.querySelector("#details"));
        assert.equal(container.container,elem.querySelector("#details").parentNode);
    });
    test(".cleanInside()",function () {
        var container = new Container(elem, "cont");
        var details = new Details(JSON.stringify(o));
        container.add(details);
        container.cleanInside();

        assert.equal(container.container.firstChild,null);

        container.cleanInside();

        assert.equal(container.container.firstChild,null);
    })

});
suite("Details", function() {

    var o;
    setup(function() {
        o= {
            "fk_category":2,
            "id": 4,
            "name": "Mini Dress",
            "price": "1150 p."
        };
    });
    test("Конструктор", function() {
        //var container = new Container("cont");
        var details = new Details(JSON.stringify(o));

        assert(details);
        expect(details.objOptions).to.deep.equal(o);
    });
});