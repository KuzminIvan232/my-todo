function TodoItem({todo, onToggle, onDelete}) {
    return (
        <li>
            <input type='checkbox' checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>X</button>
        </li>
    )
}

export default TodoItem;