// server.js

//Includes
require('./src/db-connection.js');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Environment Variables
dotenv.config(); 
PORT = process.env.PORT;

app.get('/', function(req,res){
	res.send("Hello World. I am the king of the world !");
});

app.listen(PORT, function(){
	console.log("Server is listening on " + PORT);
});

// Routes
const postRouter = require('./src/routes/post.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);