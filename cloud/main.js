var creds = require('cloud/creds.js');
var fauxPoe = require('cloud/faux-poe.js');
var Mandrill = require('mandrill');
<<<<<<< HEAD
var Callback = require('cloud/callback.js');
Mandrill.initialize('myAPIKey');
=======
Mandrill.initialize(creds.mandrill );
>>>>>>> e5779812f0e5fd66e0576db6fc62f769201083ee

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
<<<<<<< HEAD
  
});

=======
});



>>>>>>> e5779812f0e5fd66e0576db6fc62f769201083ee
