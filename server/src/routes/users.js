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

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});


	

module.exports = router;