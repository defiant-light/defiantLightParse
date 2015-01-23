var cburl = require('callback.js');
var mailboy = require('cloud/mailboy.js');

Parse.job("cburl",cburl);

Parse.job("sendEmail",mailboy.send);