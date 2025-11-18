import {useState, useEffect} from 'react'
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('todos');
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {id: Date.now(), text, completed: false}
        setTodos([...todos, newTodo]);
    }

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
      <div className='app' style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
      }}>
          <Header />
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    );
}

export default App;