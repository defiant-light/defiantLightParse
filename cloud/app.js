var express = require('express');
var creds = require('cloud/creds');
var fauxPoe = require('cloud/faux-poe.js');
var Mandrill = require('mandrill');
Mandrill.initialize(creds.mandrill );

var app = express();
app.use(express.bodyParser());

app.post('/cburl', express.basicAuth(creds.parseUsername, creds.parsePassword), function(req, res) {
  //in order to inspect the structure of the JSON returned by Coinbase, we'll log it here
  console.log(JSON.stringify(req.body));
  //responds with JSON, I think this may eventually need to change to a status 200
  res.json({ message: "success!" });
  //here in the near future - once we're sure this is working - we'll pull in
  //the mandrill functionality that's currently in main.js
  
  //we'll harvest the email address of the customer from the req.body.message
  
  //inject it into the appropriate spot of the mandrill api
  
  //and send the email.
});

app.get('/cburl', express.basicAuth(creds.parseUsername, creds.parsePassword), function(req, res) {
  //we'll remove this soon, it's mostly to test things, because curling with 
  //GET is easier than curling with POST
  res.send("success");
});

app.listen();
