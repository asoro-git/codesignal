import { useState } from "react";

function App() {
  const [userDetail, setUserDetail] = useState({ username: "", password: "" });
  const [user, setUser] = useState({ username: "" });
  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetail),
      });
      if (!res.ok) {
        throw new Error("error");
      }
      console.log(res);
      setUser({ username: res });
    } catch {
      console.error("error");
    }
  }
  if (user.username !== "") {
    return <h1>SUCCESS!</h1>;
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={userDetail.username}
          onChange={(e) =>
            setUserDetail({ ...userDetail, username: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          value={userDetail.password}
          onChange={(e) =>
            setUserDetail({ ...userDetail, password: e.target.value })
          }
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
