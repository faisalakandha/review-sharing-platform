// server.js

//Includes
require('./src/db-connection.js');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Environment Variables
dotenv.config(); 
PORT = process.env.PORT;

app.get('/', function(req,res){
	res.send("Hello World. I am here !");
});

app.listen(PORT, function(){
	console.log("Server Listening on " + PORT);
});