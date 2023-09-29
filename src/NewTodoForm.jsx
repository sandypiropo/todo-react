import { useState } from "react"

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return 

        onSubmit(newItem)

        setNewItem("")
      }
    
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="div-form-row">
      <input
        className="rounded-input" 
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        placeholder="Write here"
        id="item" />
        <button className="btn-add">Add</button>
    </div>
  </form>
  )
}