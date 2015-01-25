var express = require('express');

var app = express();

//app.use(express.bodyParser());

// post to a callback url once the button has been clicked

//module.exports

// tell coinbase where to post to

app.get('/cburl', function(req, res){
	res.send(200);
});

// listening
app.listen(process.env.PORT, process.env.IP);
