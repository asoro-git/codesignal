import { useState } from "react";
import axios from "axios";

function App() {
    // TODO: Set the initial state for the loggedIn variable using useState
    const [loggedIn, setLoggedIn] = useState(false);
    const { username, password } = { username: "admin", password: "admin" };
    const handleLogin = async () => {
        // TODO: Send a GET request to the backend /api/login endpoint to check admin credentials with query params: username: 'admin', password: 'admin'
        const response = await axios.get(
            `/api/login?username=${username}&password=${password}`,
        );
        setLoggedIn(response.data);
    };

    // TODO: Return JSX including a 'Login as Admin' button and a welcome message if logged in
    if (loggedIn) {
        return <h1>Welcome</h1>;
    }
    return <button onClick={handleLogin}>Login as Admin</button>;
}

export default App;
