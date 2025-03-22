const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const hardcodedAuth = (req, res, next) => {
    // TODO: Compare req.body.username and req.body.password with hardcoded values { username='admin', password='admin' }
    const username = req.body.username;
    const password = req.body.password;
    const user = [{ username: "admin", password: "admin" }];
    const login = user.find(
        (user) => user.username === username && user.password === password,
    );
    // Call next() if authenticated, else respond with status 401 and 'Invalid credentials'
    if (login) {
        next();
    } else {
        res.status(401).send("Invalid credentials");
    }
};

app.post("/api/login", hardcodedAuth, (req, res) => {
    // Server should send back a welcome message if the user is authenticated
    res.send("Welcome!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
