const bcrypt = require("bcrypt");
const app = require("express")();
const port = 5000;

app.use(require("express").json());

app.use("/api/signup", (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).send("Password is required");
    }

    bcrypt.hash(password, 12, (err, hash) => {
        // TODO: Tweak the security level here by setting 'saltRounds' parameter value to 12
        if (err) {
            return res.status(500).send("Error hashing password");
        }
        req.body.passwordHash = hash;
        next();
    });
});

app.post("/api/signup", (req, res) => {
    const { username, passwordHash } = req.body;
    res.status(200).send(`User ${username} signed up successfully!`);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
