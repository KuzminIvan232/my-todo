import { useState, useEffect } from 'react';
import { TODO_STORAGE_KEY } from '../utils/constants.js'; // <-- Імпортуємо константу

export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // ВИПРАВЛЕНО: використовуємо константу замість магічної строки
        const saved = localStorage.getItem(TODO_STORAGE_KEY);
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        // ВИПРАВЛЕНО: використовуємо константу замість магічної строки
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    }

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
    };
}