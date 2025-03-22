import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [loginStatus, setLoginStatus] = useState("");

    const checkLogin = () => {
        axios
            .get("/api/login?username=admin&password=admin")
            .then((response) => {
                setLoginStatus(response.data);
            })
            .catch((error) => {
                console.error("Error during login attempt:", error);
                setLoginStatus("Login failed");
            });
    };

    return (
        <div>
            <button onClick={checkLogin}>Login as Admin</button>
            <p>{loginStatus}</p>
        </div>
    );
};

export default App;
