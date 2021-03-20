//grab environmental variables
require('dotenv').config();

//import mongoose
const mongoose = require('mongoose');

//import merced logger for colorful logs
const {log} = require('mercedlogger');

//grab database string
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/database";

//mongoose config object
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

//making the database connection
mongoose.connect(MONGODB_URL, config);

//handling connection events
mongoose.connection

//event for when connection opens
.on('open', () => log.green('STATUS', 'Connected to Mongo'))

//event for when connection closes
.on('close', () => log.red('STATUS', 'Disconnected from Mongo'))

//event for errors
.on('error', (error) => log.red('Error', error))


//export the connection
module.exports = mongoose