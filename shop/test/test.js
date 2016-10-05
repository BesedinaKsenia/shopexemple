
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var assert = chai.assert;
var db = require('../server/db');
db.connect();

describe('db', function() {

    describe('.getListGoods: \n\t находит товары из категории ...', function() {

        it(("dress"), function () {
            for (var i = 0; i < db.getList("dress").length; i++) {
                assert.equal(db.getList("dress")[i]["category"],"dress");
            }
        });
        it(("t-shot"), function () {
            for (var i = 0; i < db.getList("t-shot").length; i++) {
                assert.equal(db.getList("t-shot")[i]["category"],"t-shot");
            }
        });
    });

    describe('.getGroods: \n\t Находит товар по id ...', function() {
        it("id = 1", function () {
            expect(db.getGoods(1)["id"]).to.equal(1);
        });
        it("id = 2", function () {
            expect(db.getGoods(2)["id"]).to.equal(2);
        });
        it("id = 3", function () {
            expect(db.getGoods(3)["id"]).to.equal(3);
        });
        it("id = 4", function () {
            expect(db.getGoods(4)["id"]).to.equal(4);
        });
    });
});


