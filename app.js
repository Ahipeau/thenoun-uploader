var express = require ('express'); 
var app = express ();
app.get ('/', function (req, res) { 
  res.send ('Salut tout le monde!'); 
});
app.listen (3000, function () { 
  console.log ('Exemple d\'application écoutant sur le port 3000!'); 
});