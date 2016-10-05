// берём Express
var express = require('express');
var url = require('url');
var db = require('./server/db');
db.connect();

// создаём Express-приложение
var app = express();
app.use(express.static(__dirname));


app.get('/categories', function (req, res) {
    console.log(req.header('Referrer'));
    if (req.query.ajax == '1')
        res.send(JSON.stringify(db.getCategories()));
    else res.sendfile('index.html');

});

app.get('/list', function (req, res) {
    console.log(req.header('Referrer'));
    if (req.query.ajax == '1')
        res.send(JSON.stringify(db.getList(req.query.id)));
    else res.sendfile('index.html');
});
app.get('/details', function (req, res) {
    console.log(req.header('Referrer'));
    if (req.query.ajax == '1')
        res.send(JSON.stringify(db.getGoods(req.query.id)));
    else res.sendfile('index.html');
});

function isExist(path, regular) {
    return regular.test(path) && path.match(regular).length == 1;
}
function detailsToJSON(path) {
    var id = path.replace(/[^\d]/g, '');
    return JSON.stringify(db.getGoods(id));
}
function listToJSON(path) {
    var id = path.replace(/[^\d]/g, '');
    return JSON.stringify(db.getList(id));
}

// запускаем сервер на порту 8080
app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
    //console.log(db.getCategories());
});
// отправляем сообщение
console.log('Сервер стартовал!');