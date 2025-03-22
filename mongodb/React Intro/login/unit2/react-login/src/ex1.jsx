import { useState } from "react";
import axios from "axios";

const App = () => {
    const [credentials, setCredentials] = useState({
        username: "bookworm",
        password: "read1234",
    });

    const handleLogin = () => {
        // Send the POST request with the credentials in the request body, not in the URL.
        axios
            .post(`http://localhost:5000/api/login`, credentials)
            .then((response) => alert(response.data.message))
            .catch((error) => alert(error.response.data.message));
    };

    // Update the change handlers for controlled form inputs.
    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <input
                name="username"
                type="text"
                value={credentials.username}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default App;
