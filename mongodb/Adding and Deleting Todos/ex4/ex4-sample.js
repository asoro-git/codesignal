document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todos');

    async function loadTodos() {
        try {
            const res = await fetch('/api/todos');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const todos = await res.json();
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const li = createTodoElement(todo);
                todoList.appendChild(li);
            });
        } catch (err) {
            console.error('Error fetching todos:', err);
        }
    }

    // TODO: Add the add button

    todoList.addEventListener('click', async (e) => {
        if (e.target.tagName === 'LI' && confirm("Do you want to delete this item?")) {
            const todoId = e.target.dataset.id;
            try {
                await fetch(`/api/todos/${todoId}`, {
                    method: 'DELETE'
                });
                loadTodos();
            } catch (err) {
                console.error('Error deleting todo:', err);
            }
        } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            const todoId = e.target.parentElement.dataset.id;
            try {
                await fetch(`/api/todos/${todoId}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ completed: e.target.checked })
                });
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
            await fetch(`/api/todos/${todo._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: checkbox.checked })
            });

            // Apply or remove the strikethrough based on the checkbox state
            li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
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
