import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addTodo, getTodos } from '../services/AuthServices';
import TodoList from './TodoList';
import { toast } from 'react-toastify';
import { GiDiamonds } from 'react-icons/gi';

const TodoInput = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const navigate = useNavigate();

    const handleGetTodos = async () => {
        const response = await getTodos();
        setTodos(response.todos);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
        else {
            handleGetTodos();
        }
    }, [todos, text])

    const addtodo = async (e) => {
        e.preventDefault();

        if (text === '') {
            return toast.error('Cannot add empty to list!!');
        }

        try {
            await addTodo({ text });
            setText('');
            handleGetTodos();
        } catch (error) {
            return toast.error(error.message);
        }
    }

    return (
        <div className="wrapper">
            <div className="card">
                <GiDiamonds size={50} />
                <h1>My Todo</h1>
                <form onSubmit={addtodo} className='todoForm'>
                    <input type="text" name="todoInput" value={text} placeholder='Add todo' onChange={(e) => setText(e.target.value)} />

                    <button type="submit" className='add-todo-btn'>Add</button>
                </form>
                <TodoList todos={todos} text={text} setText={setText} />
            </div>
        </div>
    )
}

export default TodoInput