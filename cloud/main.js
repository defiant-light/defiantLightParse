
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

var Mandrill = require('mandrill');
Mandrill.initialize('myAPIKey');

Parse.Cloud.job("sendEmail",function(a,b){
    console.log(Json.stringify(a));
    console.log(Json.stringify(b));
    Mandrill.sendEmail({
    message: {
      text: "Hello World!",
      subject: "Using Cloud Code and Mandrill is great!",
      from_email: "parse@cloudcode.com",
      from_name: "Cloud Code",
      to: [
        {
          email: "lucaswadedavis@gmail.com.com",
          name: "Your Name"
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
  
});


var cburl = require('cloud/callback.js');
var mailboy = require('cloud/mailboy.js');

Parse.Cloud.job("cburl",cburl);

Parse.Cloud.job("sendEmail",mailboy.send);
