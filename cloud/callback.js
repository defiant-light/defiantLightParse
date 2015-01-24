module.exports = function(req, res){
	console.log(JSON.stringify(req));

  var data = req.body;
  var orderStatus = data.order.status;
  var custEmail = data.customer.email;

  if (orderStatus === "complete") {
    // trigger faux-poe
    // send file to custEmail
    return res.send(???);
  }
};






