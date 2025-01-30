import { useState } from "react";
import axios from "axios";

function App() {
  const [credentials, setCredentials] = useState({
    username: "guest",
    password: "guest123",
  });

  const handleLogin = () => {
    axios.post("/api/login", credentials).then((response) => {
      alert(response.data);
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login as Guest</button>
    </div>
  );
}

export default App;
