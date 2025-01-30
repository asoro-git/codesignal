// Import libraries and prepare for incantations
const express = require("express");
const app = express();
app.use(express.json());

// Hardcoded user in our enchanted script
const user = { id: "1", username: "admin", password: "admin" };

// The spell, the sentry, and the gatekeeper
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // A simple incantation of authentication
  if (username === user.username && password === user.password) {
    res.status(200).send("Login successful");
  } else {
    // Oops! The spell failed
    res.status(401).send("Invalid username or password");
  }
});

// Invoke the server
app.listen(3000, () => console.log("Server is humming..."));
