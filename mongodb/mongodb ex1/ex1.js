document.addEventListener("DOMContentLoaded", async () => {
	const todoList = document.getElementById("todos");

	const res = await fetch("/api/todos", { method: "GET" });
	const todos = await res.json();

	if (todos.length === 0) {
		const todoItems = ["Item 1", "Item 2", "Item 3"];

		for (const text of todoItems) {
			await fetch("/api/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text, completed: false }),
			});
		}
	}

	// TODO: Create an async function to load todos from the backend
	async function loadTodos() {
		try {
			// Fetch todos from the backend using the correct endpoint
			const res = await fetch("/api/todos");

			// Check if the fetch was successful
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			// Parse the response as JSON
			const todos = await res.json();

			// Clear the todo list container
			todoList.innerHTML = "";

			// TODO: Loop through the todos and create elements for each todo
		} catch (err) {
			console.error("Error fetching todos:", err);
		}
	}

	// Call the function to load todos when the document is loaded
	loadTodos();
});

// TODO: Write a function to create a todo element
function createTodoElement(todo) {
	// TODO: Create an li element
	const li = document.createElement("li");
	// TODO: Create a checkbox element and set its type to "checkbox"
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	// TODO: Set the checkbox checked property to match the todo's completed status
	checkbox.checked = todo.completed;
	// TODO: Apply strikethrough style to li if the todo is completed
	if (todo.completed) {
		li.style.textDecoration = "line-through";
	}
	// TODO: Add an event listener to handle checkbox changes and update the backend
	document.addEventListener("change", () => {
		const res = (await = fetch("api/todos/todo._id", {
			method: "PATCH",
			header: { "Content-Type": "application/json" },
			body: { completed: checkbox.checked },
		}));
		if (!res.ok) {
			checkbox.checked = !checkbox.checked;
			throw Error(err.message);
		}
		li.style.textDecoration = checkbox.checked ? "line-through" : "none";
	});
	// Set the data-id attribute of the li element to the todo's id
	li.dataset.id = todo._id;

	// Append the checkbox and todo text to the li element
	li.appendChild(checkbox);
	li.appendChild(document.createTextNode(todo.text));

	// Return the created li element
	return li;
}
