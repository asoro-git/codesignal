import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const user = { username: "guest", password: "1234" };

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.status(204).send("login successful");
  } else {
    res.status(401).send("Access Denied");
  }
});

app.listen(5000, () => console.log("listening at port 5000"));
