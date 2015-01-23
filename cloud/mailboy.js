var creds = require('cloud/creds.js');
var Mandrill = require('mandrill');
Mandrill.initialize(creds.mandrill() );

var mailboy={};
mailboy.send=function(a,b){
    console.log(JSON.stringify(a));
    console.log(JSON.stringify(b));
    Mandrill.sendEmail({
    message: {
      text: "Hello World!",
      subject: "Using Cloud Code and Mandrill is great!",
      from_email: "parse@cloudcode.com",
      from_name: "Cloud Code",
      to: [
        {
          email: "lucaswadedavis@gmail.com",
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
  
};

module.exports=mailboy;