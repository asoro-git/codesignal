function LoginForm() {
  const [details, setDetails] = useState({ email: "", password: "" }); // The humble beginnings of form data

  // Behold the birth of the login form
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <input type="submit" value="LOGIN" />
    </form>
  );
}

function LoginForm() {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent page refresh

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.text())
      .then((data) => alert(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Rest of the LoginForm component...
}
