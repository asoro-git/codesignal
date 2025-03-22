// No change from the solution, as the server code is correct
const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
const users = {};

app.post("/api/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userID = "user-" + Date.now();
        users[userID] = hashedPassword;
        res.status(200).send({ userID, hashedPassword });
    } catch (err) {
        res.status(500).send("Error during signup");
    }
});

app.post("/api/login", async (req, res) => {
    const userID = req.body.userID;
    const userHash = users[userID];

    try {
        const match = await bcrypt.compare(req.body.password, userHash);
        if (match) {
            res.status(200).send("Login Successful");
        } else {
            res.status(401).send("Login Failed");
        }
    } catch (err) {
        res.status(500).send("Error during login");
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
