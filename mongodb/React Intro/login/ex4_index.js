const express = require("express");
const app = express();

app.use(express.json());

// TODO: Create an object representing a user with a username and password

// TODO: Set up a POST route '/api/login' that compares the incoming username and password with the user object
// On a username and password match, send back a welcome message; otherwise, send a 401 status with an error message

// TODO: Make your server listen on port 5000 and log a message when it's running
