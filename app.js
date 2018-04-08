var express = require ('express'); 
var app = express ();
//Implementation du moteur pug
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get ('/', function (req, res) { 
  res.render ('form'); 
});
app.listen (3000, function () { 
  console.log ('Exemple d\'application écoutant sur le port 3000!'); 
});