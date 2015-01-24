var creds = require('cloud/creds.js');
var fauxPoe = require('cloud/faux-poe.js');
var Mandrill = require('mandrill');
Mandrill.initialize(creds.mandrill );

Parse.Cloud.job("sendMail",function(request,response){
  console.log("mandrill creds: ");
  console.log(creds);
  console.log(creds.mandrill);
  Mandrill.sendEmail({
    message: {
      text: fauxPoe(),
      subject: "Faux Poe",
      from_email: "parse@cloudcode.com",
      from_name: "Faux Poe",
      to: [
        {
          email: "lucaswadedavis@gmail.com",
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
});



