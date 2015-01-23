var mailboy = require('cloud/mailboy.js');

Parse.job("sendEmail",mailboy.send);