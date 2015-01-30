var express = require('express');
var creds = require('cloud/creds');
var fauxPoe = require('cloud/faux-poe.js');
var Mandrill = require('mandrill');
Mandrill.initialize(creds.mandrill );

var mailboy=function(address, message){
  if (address===undefined){var address="lucaswadedavis@gmail.com";}
  if (message===undefined){
    var manyPoems=[];
    for (var i=0;i<100;i++){
      manyPoems.push(fauxPoe() );
    }
    var message=manyPoems.join("\n\n");
  }
  
  Mandrill.sendEmail({
    message: {
      text: message,
      subject: "Faux Poe",
      from_email: "parse@cloudcode.com",
      from_name: "Faux Poe",
      to: [
        {
          email: address,
          name: "Luke"
        }
      ]
    },
    async: true
  },{
    success: function(httpResponse) {
      console.log(httpResponse);
      response.success("Email sent!");
    },
    error: function(httpResponse) {
      console.error(httpResponse);
      response.error("Uh oh, something went wrong");
    }
  });
};


var app = express();
app.use(express.bodyParser());

app.post('/cburl', express.basicAuth(creds.parseUsername, creds.parsePassword), function(req, res) {
  //remove this when you're sure everything's working properly
  console.log(JSON.stringify(req.body));
  //check the order for a customer and customer.email property - they don't all have it.
  if (req.body.order){
    var order=req.body.order;
    if (order.customer && order.customer.email){
      mailboy(order.customer.email);
    } else {
      mailboy("lucaswadedavis@gmail.com","something went wrong with defiant light - check the logs");
    }
  }
  
  //responds with JSON, I think this may eventually need to change to a status 200
  res.json({ message: "success!" });
});

app.get('/cburl', express.basicAuth(creds.parseUsername, creds.parsePassword), function(req, res) {
  //we'll remove this soon, it's mostly to test things, because curling with 
  //GET is easier than curling with POST
  res.send("success");
});

app.listen();
