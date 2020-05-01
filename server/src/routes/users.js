const express = require('express');
const router = express.Router();
const { user } = require("../models/user");

//const { auth } = require("../midleware/auth");

router.post("/register", (req,res) => {
	
	const ruser = new user(req.body);
	
	ruser.save((err, doc) => {
		if(err) return res.json({success: false, err});
		return res.status(200).json({
			success: true
		});
	});	
		
});
	

module.exports = router;