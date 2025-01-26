document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todos');

    async function loadTodos() {
        // TODO: Fetch the list of todos from the backend and display them in the UI
        // 1. Make a fetch call to '/api/todos'
        // 2. Check if the response is ok
        // 3. Convert the response to JSON
        // 4. Clear the existing todo list
        // 5. Loop through the received todos and create list items for each
        // 6. Append each created list item to the todo list
    }

    addButton.addEventListener('click', async () => {
        const newTodoText = newTodoInput.value.trim();
        if (newTodoText) {
            // TODO: Add a new todo item to the backend and reload the list
            // 1. Make a fetch call with method 'POST' to '/api/todos'
            // 2. Include appropriate headers and body in the request
            // 3. Clear the input field
            // 4. Reload the list of todos
        }
    });

    todoList.addEventListener('click', async (e) => {
        if (e.target.tagName === 'LI' && confirm("Do you want to delete this item?")) {
            const todoId = e.target.dataset.id;
            try {
                // TODO: Delete a todo item from the backend and reload the list
                // 1. Make a fetch call with method 'DELETE' to `/api/todos/${todoId}`
                // 2. Reload the list of todos
            } catch (err) {
                console.error('Error deleting todo:', err);
            }
        } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            const todoId = e.target.parentElement.dataset.id;
            try {
                // TODO: Update the completed status of a todo item and reflect the update in the UI
                // 1. Make a fetch call with method 'PATCH' to `/api/todos/${todoId}`
                // 2. Include appropriate headers and body in the request
            } catch (err) {
                console.error('Error updating todo:', err);
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
        try {
            // TODO: Update the completed status of the todo item in the backend
            // 1. Make a fetch call with method 'PATCH' to `/api/todos/${todo._id}`
            // 2. Include appropriate headers and body in the request
            // 3. Adjust the strikethrough styling based on the checkbox state
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
