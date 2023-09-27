import React, { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  const [showWellDoneMessage, setShowWellDoneMessage] = useState(false); // Novo estado


  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
    setShowWellDoneMessage(false);
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo 
      })
    })
  }

function deleteTodos(id) {
  setTodos(currentTodos => {
    const updatedTodos = currentTodos.filter(todo => todo.id !== id)
    if (updatedTodos.length === 0) {
      setShowWellDoneMessage(true);
    }
    return updatedTodos
  })
}

  console.log(todos)

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo list</h1>
      <ul className="list">
        {todos.length === 0 && !showWellDoneMessage && "Nothing to do? :)"}
        {showWellDoneMessage && <p>Well done! :)</p>} 
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button 
              onClick={() => deleteTodos(todo.id) } 
              className="btn-2">Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}



/* */