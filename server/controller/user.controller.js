const { User } = require("../models/User");
//import _ from 'loadash';
// const errorHandler = require('./error.controller');


 
const list = (req, res) => {
	User.find((err, list) => {
		if(err){
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		})
		}
		res.json(list)
	}).select('name email updated created')
}

	
const userByID = (req, res, next, id) => { 
	User.findById(id).exec((err, user) => {
		if(err || !user)
			return res.status('400').json({
				error: 'User not found'
			})
		req.profile = user
		next()
	})
 }


const read = (req, res) => { 
	req.profile.password = undefined
	req.profile.salt = undefined
	return res.json(req.profile)
 }

//const update = (req, res, next) => { … }
const remove = (req, res, next) => { 
	 let user = req.profile
  user.remove((err, deletedUser) => {
    if (err) {
		 return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    deletedUser.hashed_password = undefined
    deletedUser.salt = undefined
    res.json(deletedUser)
  })
}
 



//export default { create, userByID, read, list, remove, update }
module.exports = { userByID, list, read, remove}