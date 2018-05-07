var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();

// Register '.html' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

//moteur de template mustache

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

//Les Routes ou Le rend

app.get('/', function(req, res) {
    res.render('index', { test: 'Salut' });
});



app.listen(3000, function() {
    console.log('The app is running on port 3000!');
});