function App() {
    let message = "";

    const login = () => {
        const credentials = { username: "admin", password: "admin" };
        fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.text())
            .then((data) => (message = data))
            .catch((error) => (message = error.message));

        document.getElementById("response").textContent = message;
    };

    return (
        <div>
            <button onClick={login}>Log In</button>
            <div id="response"></div>
        </div>
    );
}

export default App;
