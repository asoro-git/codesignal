const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const users = [{ id: "2", username: "guest", password: "guest123" }];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  if (user) {
    res
      .status(200)
      .send(`Welcome, ${user.username}, to the our secure Banking System!`); // TODO: Modify this line to personalize the welcome message.
  } else {
    res.status(401).send("Access Denied: Incorrect Username or Password");
  }
});

app.listen(5000, () => console.log("Server is humming on port 5000..."));
