export function TodoItem({completed, id, title, toggleTodo, deleteTodos}) {
    return ( 
        <li className="todo-list" key={id}>
            <div className="div-todo-container">
                <label className="todo-label">
                    <input
                    className="checkbox"
                    type="checkbox" 
                    checked={completed} 
                    onChange={e => toggleTodo(id, e.target.checked)} 
                    />
                    {title}
                </label>
                <div className="div-btn-delete">
                    <button 
                    onClick={() => deleteTodos(id) } 
                    className="btn-delete">X
                    </button>
                </div>
            </div>
        </li>
        )
    }