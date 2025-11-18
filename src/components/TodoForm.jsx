import {useState} from 'react';

function TodoForm({onAdd}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onAdd(value.trim());
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <p>Add new task:</p>
            <input type='text' value={value}
                   onChange={(e) => setValue(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default TodoForm;