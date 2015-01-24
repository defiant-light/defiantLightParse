var creds = require('cloud/creds.js');
var fauxPoe = require('cloud/faux-poe.js');
var Mandrill = require('mandrill');
Mandrill.initialize(creds.mandrill );

Parse.Cloud.job("sendMail",function(request,response){
  var manyPoems=[];
  for (var i=0;i<100;i++){
    manyPoems.push(fauxPoe() );
  }
  
  Mandrill.sendEmail({
    message: {
      text: manyPoems.join("\n\n"),
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



