export function TodoItem({completed, id, title, toggleTodo, deleteTodos}) {
    return ( 
        <li key={id}>
            <label>
                <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)} 
                />
                {title}
            </label>
            <button 
            onClick={() => deleteTodos(id) } 
            className="btn-2">Delete
            </button>
        </li>
        )
    }