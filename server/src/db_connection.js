const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// mongoose options
const options = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
	autoIndex: false,
	poolSize: 10,
	bufferMaxEntries: 0
};

// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;

//Use MongoDB ATLAS Database or Install MogoDB Locally 
const dbConnectionURL = {
    'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`, // If use Mongo Atlas or MongoDB Locally
	'MONGO_ATLAS': 'mongodb+srv://james:1234@cluster0-oqt8f.mongodb.net/test?retryWrites=true&w=majority'
};

// Database Connection
mongoose.connect(dbConnectionURL.MONGO_ATLAS,options); // Use MONGO_ATLAS parameter with MongoDB Atlas or use LOCALURL if MongoDB hosted Locally
const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.MONGO_ATLAS));
db.once('open', () => {
     // we're connected !
     console.log('Mongodb Connection Successful');
});