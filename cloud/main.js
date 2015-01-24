var Mandrill = require('mandrill');
var Callback = require('cloud/callback.js');
Mandrill.initialize('myAPIKey');

Parse.job("sendEmail",function(a,b){
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

