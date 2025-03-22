import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    axios
      .post("/api/login", { username: email, password: password })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert("An error occurred while logging in.");
        console.error("Login error:", error);
      });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={submitLogin}>Login</button>
    </div>
  );
}

export default App;
