document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todos');

    async function loadTodos() {
        // TODO: Fetch the list of todos from the backend and display them in the UI
        // 1. Make a fetch call to '/api/todos'
        try {
            await fetch('api/todos', {
                method: "GET"
            })
            // 2. Check if the response is ok
            if (!res.ok) { throw new Error(message) }
            // 3. Convert the response to JSON
            res = await res.json()
            // 4. Clear the existing todo list
            todoList.innerHTML = ''
            // 5. Loop through the received todos and create list items for each
            res.forEach(
                todo => {
                    const li = createTodoElement(todo)
                    // 6. Append each created list item to the todo list
                    todoList.appendChild(li)
                }
            )
        } catch {
            console.error(err.message)
        }
    }

    addButton.addEventListener('click', async () => {
        const newTodoText = newTodoInput.value.trim();
        if (newTodoText) {
            // TODO: Add a new todo item to the backend and reload the list
            try {
                // 1. Make a fetch call with method 'POST' to '/api/todos'
                await fetch('/api/todos', {
                    // 2. Include appropriate headers and body in the request
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 'text': newTodoText.value, 'completed': false })
                })
            } catch {
                console.error(message)
            }

            // 3. Clear the input field
            newTodoText.value = ''
            // 4. Reload the list of todos
            loadTodos()

        }
    });

    todoList.addEventListener('click', async (e) => {
        if (e.target.tagName === 'LI' && confirm("Do you want to delete this item?")) {
            const todoId = e.target.dataset.id;
            try {
                // TODO: Delete a todo item from the backend and reload the list
                // 1. Make a fetch call with method 'DELETE' to `/api/todos/${todoId}`
                await fetch(`/api/todos/${todoId}`, {
                    method: "DELETE"
                })
                // 2. Reload the list of todos
                loadTodos()
            } catch (err) {
                console.error('Error deleting todo:', err);
            }
        }
    });

    loadTodos();
});

function createTodoElement(todo) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    // Initial strikethrough based on the completed status
    if (todo.completed) {
        li.style.textDecoration = 'line-through';
    }

    checkbox.addEventListener('change', async () => {
        // TODO: Update the completed status of the todo item in the backend
        try {
            const res = await fetch(`/api/todos/${todo._id}`, {
                // 1. Make a fetch call with method 'PATCH' to `/api/todos/${todo._id}`
                method: 'PATCH',
                // 2. Include appropriate headers and body in the request
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: checkbox.checked })
            })
            if (!res.ok) { throw new Error(message) }
            // 3. Adjust the strikethrough styling based on the checkbox state
            li.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
        } catch (err) {
            console.error('Error updating todo:', err);
            // Revert the checkbox state if there is an error
            checkbox.checked = !checkbox.checked;
        }
    });

    li.dataset.id = todo._id;
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(todo.text));

    return li;
}
