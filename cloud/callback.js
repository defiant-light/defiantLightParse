<<<<<<< HEAD

module.exports = function(req, res){
	console.log(JSON.stringify(req));
}
=======
module.exports = function(req, res){
	console.log(JSON.stringify(req));

  var data = req.body;
  var orderStatus = data.order.status;
  var custEmail = data.customer.email;

  if (orderStatus === "complete") {
    console.log("Bitcoin is for suckers:", data);

    // trigger faux-poe
    // send file to custEmail
    return res.send(???);
  }
};






>>>>>>> e5779812f0e5fd66e0576db6fc62f769201083ee
