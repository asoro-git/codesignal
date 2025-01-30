const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [{ id: "1", username: "user1", password: "pass1" }];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const foundUser = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (foundUser) {
    res.status(200).send("Welcome to the Banking System!");
  } else {
    res.status(401).send("Invalid credentials. Please try again.");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
