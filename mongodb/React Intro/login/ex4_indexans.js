const express = require("express");
const app = express();

app.use(express.json());

// TODO: Create an object representing a user with a username and password
const user = [{ username: "admin", password: "admin" }];
// TODO: Set up a POST route '/api/login' that compares the incoming username and password with the user object
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const userFound = user.find(
        (user) => username === user.username && password === user.password,
    );
    if (userFound) {
        res.status(200).send("Welcome!");
    } else {
        res.status(401).send("error, cannot find user");
    }
});
// On a username and password match, send back a welcome message; otherwise, send a 401 status with an error message

// TODO: Make your server listen on port 5000 and log a message when it's running
app.listen(5000, console.log("listening at port 5000"));
