import { useTodos } from './hooks/useTodos.js';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

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