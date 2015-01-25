var creds = require('cloud-creds');
var express = require('express');

var app = express();
app.use(express.bodyParser());
app.post('/test', express.basicAuth('creds.parseUsername', 'creds.parsePassword'),  function(req, res) {
  res.json({ message: req.body.message });  // Send a JSON response
});

app.get('/test', function(req, res) {
  res.send("success"); // Send a JSON response
});

/* 
app.get('/cburl', function(req, res){
  res.send(200);
});
*/

app.listen();
