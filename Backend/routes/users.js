var express = require('express');
var router = express.Router();
const User = require('../models/User');


router.get('/api/home/auth=:mailaddress',function(req,res){
	const userEmail=req.params.mailaddress;
	User.find({email:userEmail})
	.then(user =>{
		res.send({
			userData:user[0]
		})
	})
	.catch(err=>{
		res.send({
			data: null
		})
		console.log("Couldnot Send Data")
	})
})


module.exports = router;
