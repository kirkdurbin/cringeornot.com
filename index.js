/**
 * This is the main file of the application. Run it with the
 * `node index.js` command from your terminal
 *
 * Remember to run `npm install` in the project folder, so 
 * all the required libraries are downloaded and installed.
 */ 

var express = require('express');
var passport_imgur = require('passport-imgur');
var passport = require('passport');

// Create a new express.js web app:

var app = express();


// Configure express with the settings found in
// our config.js file

require('./config')(app);


// Add the routes that the app will react to,
// as defined in our routes.js file

require('./routes')(app);

// This file has been called directly with 
// `node index.js`. Start the server!

app.set('trust proxy', 'loopback');

app.listen(8080, "127.0.0.1");
console.log('Your application is running on port 8080');
