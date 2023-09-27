import React, { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
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
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn-2">Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}



/* */