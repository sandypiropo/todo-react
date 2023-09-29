import { TodoItem } from "./TodoItem"

export function Todolist({todos, toggleTodo, deleteTodos}) {
    return (
        <ul className="list">
            {todos.length === 0 && "Nothing to do?"}
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id} 
                    completed={todo.completed} 
                    title={todo.title}
                    toggleTodo={toggleTodo}
                    deleteTodos={deleteTodos}
                />
        ))}
    </ul>
    );
}