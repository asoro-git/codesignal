const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
const port = 5000;

app.post("/api/signup", async (req, res) => {
    const { password } = req.body;
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Save hashedPassword to database (mocked)
        console.log("Password hashed and saved: ", hashedPassword);
        res.status(201).send({ hashedPassword });
    } catch (error) {
        res.status(500).send("Error during signup.");
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
