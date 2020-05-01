//Includes
const mongoose = require('mongoose');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role : {
        type:Number,
        default: 0 
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    }
});

//Password hashing with brcrypt
userSchema.pre('save', function(next){
	var puser = this;
	if(user.isModified('password')){
		//console.log("Password Changed!");
		bcrypt.genSalt(saltRounds, function(err,salt){
			if(err) return next(err);
			bcrypt.hash(puser.password, salt, function(){
				user.password = hash;
				next();
			})
		});
		
	} else {
		next();
	}
});

const user = mongoose.model("user", userSchema);

module.exports = { user }; 