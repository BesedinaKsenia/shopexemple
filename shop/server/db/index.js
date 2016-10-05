var db;

exports.connect = function() {
    db = require('./fake_db');
    console.log("db connect");
};

exports.getCategories = function() {
    return db["categories"];
};

exports.getList = function(category) {
    var list = [];
    console.log("!");
    for(var i = 0; i<db["goods"].length; i++) {
        if (db["goods"][i]["fk_category"] == category) {
            list.push(db["goods"][i]);
        }
    }
    if(!list.length){
        throw new Error("Category \"" + category + "\" is not in the database");
    }
    return list;
};

exports.getGoods = function(id) {

    for(var i = 0; i<db["goods"].length; i++) {
        if (db["goods"][i]["id"] == id) {

            return db["goods"][i];
        }
    }

    if(i=db["goods"].length){
        throw new Error("Product with id = " + id + " is not in the database");
    }
};