import React, { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("aaaa")

  return (
    <div>
      <form className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input value={newItem} type="text" id="item"/>
        </div>  
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo list</h1> 

    </div>
  )
} 



    /*      <ul className="list">
        <li>
          <label>
            <input type="checkbox">
              Item 1
            </input>
            <button className="btn-2">Delete</button>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
              Item 2
            </input>
            <button className="btn-2">Delete</button>
          </label>
        </li>
      </ul>  */