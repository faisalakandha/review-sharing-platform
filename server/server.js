// server.js

//Includes
require('./src/db-connection.js');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require("./config/key");

// Environment Variables
dotenv.config(); 
PORT = process.env.PORT;

// Not to get any deprecation warning or error
// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

//to get json data
//support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

//Routes
app.use('/api/users', require('./src/routes/users'));

app.get('/', function(req,res){
	res.send("Hello World. I am here !");
});

app.listen(PORT, function(){
	console.log("Server Listening on " + PORT);
});