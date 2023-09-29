import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { Todolist } from "./TodoList";
import "./style.css";


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
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
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  return (
    <div>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo list</h1>
      <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
    </div>
  )
}

