const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/ex1_user");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://127.0.0.1:27017/bookstore", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the MongoDB database.");
    })
    .catch((err) => {
        console.error("Error connecting to the database", err);
    });

// Let's add one user to our DB
User.create({
    username: "bookworm",
    password: "read1234",
})
    .then((doc) => console.log("User created:", doc))
    .catch((err) => console.error("Error creating user:", err));

function validatePassword(userPassword, inputPassword) {
    return userPassword === inputPassword;
}

app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log("received login request", req.body);
        const user = await User.findOne({ username: username });
        if (!user) {
            console.log("user not found");
            return res.status(404).send({ message: "User not found" });
        }
        if (!validatePassword(user.password, password)) {
            console.log("invalid password");
            return res.status(401).send({ message: "Invalid password" });
        }
        res.status(201).send({ message: "success" });
    } catch (err) {
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
