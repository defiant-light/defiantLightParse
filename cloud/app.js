var express = require('express');

var app = express();
app.post('/test', function(req, res) {
  res.json({ message: req.body.message });  // Send a JSON response
});

/* 
app.get('/cburl', function(req, res){
  res.send(200);
});
*/

app.listen();
