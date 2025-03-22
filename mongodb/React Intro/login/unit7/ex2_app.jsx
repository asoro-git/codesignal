import { useState } from "react";
import axios from "axios";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = () => {
        axios
            .post("/api/signup", { username, password })
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                setMessage("Signup failed. Please try again.");
            });
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Library Card Number"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSignup}>Sign Up</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default App;
