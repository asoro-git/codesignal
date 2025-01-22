todoList.addEventListener("click", async (e) => {
  const todoId = e.target._id
  if (
    e.target.tagName === "Li" && confirm('You want to delete the item right?')
  ) {
    try {
      await fetch(`/api/todos/${todoId}`,
        { method: "DELETE", headers: { 'Content-Type': 'application / json' } })
    } catch (err) {
      console.log('err', err.message)
    }
  } else if (e.target.tagName === "input") {
    try {
      await fetch(`/api/todos/${todoId}`, {
        method: "PATCH",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({ completed: checkbox.checked })
      })
    } catch (err) {
      checkbox = !checkbox.checked
      console.log('err', err.message)
    }
  }
})
loadTodos()


