var express = require('express');
var app = express();

var taches = ["Aller en cours"];



app.get('/', function(req, res) {
    res.render('index.ejs',{taches: taches[0]})
});

app.listen(8080);
