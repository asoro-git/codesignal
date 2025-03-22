import { useState } from "react";

function App() {
  const [details, setDetails] = useState({ username: "", password: "" });
  const login = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Failed to login");
        }
      })
      .then((message) => {
        alert(message);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setDetails({ ...details, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />
      <button onClick={login}>Login</button>
    </>
  );
}

export default App;
