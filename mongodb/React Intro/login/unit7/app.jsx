import { useState } from "react";
import axios from "axios";

export default function App() {
    const [password, setPassword] = useState("");
    const [hashedPassword, setHashedPassword] = useState("");

    const handleSignUp = () => {
        axios.post("/api/signup", { password }).then((response) => {
            setHashedPassword(response.data.hashedPassword);
        });
    };

    return (
        <div>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
            {hashedPassword && (
                <div>
                    <p>Signed up with hashed password: {hashedPassword}</p>
                </div>
            )}
        </div>
    );
}
