const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const hardcodedUsers = [
  { id: "1", username: "customer@bank.com", password: "12345" },
  { id: "2", username: "employee@bank.com", password: "password" },
];

// TODO: Complete the /api/login route to check the username and password and respond with message "Welcome to the Banking System!" and status code 200 if there is a user with given credentials, otherwise respond with "Invalid credentials" and error status 401.
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const foundUser = hardcodedUsers.find(
    (user) => username === user.username && password === user.password,
  );
  if (foundUser) {
    res.status(200).send("Welcome to the Banking System!");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(5000, () =>
  console.log("Banking system server is humming on port 5000..."),
);
