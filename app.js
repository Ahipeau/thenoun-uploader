var express = require ('express'); 
var app = express ();

// Implementing template engine Pug
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get ('/', function (req, res) { 
  res.render ('form'); 
});
app.listen (3000, function () { 
  console.log ('The app is running on port 3000!'); 
});
