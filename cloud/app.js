var express = require('express');

var app = express();

//app.use(express.bodyParser());

// post to a callback url once the button has been clicked

//module.exports

// tell coinbase where to post to

app.get('/cburl', function(req, res){
	res.send(200);
});

app.listen(8080, '127.0.0.1');
