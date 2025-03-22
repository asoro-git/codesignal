import { useState } from "react";
import axios from "axios";

export default function App() {
    const [password, setPassword] = useState("");
    const [userID, setUserID] = useState("");
    const [loginMessage, setLoginMessage] = useState(""); // New state variable for login message

    const handleSignup = () => {
        axios.post("/api/signup", { password }).then((response) => {
            console.log(response.data);
            setUserID(response.data.userID);
        });
    };

    const handleLogin = () => {
        axios
            .post("/api/login", { userID, password })
            .then((response) => setLoginMessage(response.data)) // Set login message on success
            .catch((err) => setLoginMessage(err.message)); // Set error message on failure
    };

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handleLogin}>Log In</button>
            {userID && <p>Your User ID: {userID}</p>}
            {loginMessage && <p>{loginMessage}</p>}{" "}
            {/* Display login message */}
        </div>
    );
}
