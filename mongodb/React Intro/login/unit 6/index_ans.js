const express = require("express");
const app = express();

// TODO: Set up your middleware and route for handling the login logic
let middleware = (req, res, next) => {
    let { username, password } = req.query;
    if (username === "admin" && password === "admin") {
        next();
    } else {
        res.status(401).send("Error logging in");
    }
};
app.get("/api/login", middleware, async (req, res) => {
    res.status(200).send(true);
}); // TODO: Update to include your middleware and send a response on successful authentication

app.listen(5000, console.log("listening at 5000")); // TODO: Add a console log to indicate that the server is running
