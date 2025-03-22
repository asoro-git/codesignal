const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

const app = express();
const port = 5000;

// Connect to MongoDB and create one user
mongoose
    .connect("mongodb://127.0.0.1:27017/bookstoredb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the MongoDB database.");
        User.create({
            username: "admin",
            password: "admin",
        });
    })
    .catch((err) => {
        console.error("Error connecting to the database", err);
    });

// Authentication Middleware
const authMiddleware = async function (req, res) {
    try {
        // TODO: Update the query to check both username and password
        const user = await User.findOne({
            username: req.query.username,
            password: req.query.password,
        });
        if (user) {
            res.send("Welcome to the Online Bookstore!");
        } else {
            res.send("Invalid credentials");
        }
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).send("Authentication failed due to an error");
    }
};

// Login Route
app.get("/api/login", authMiddleware);

app.listen(port, () => {
    console.log(`Bookstore server running on port ${port}`);
});
