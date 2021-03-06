import React, { useEffect, useReducer } from 'react';
import todoReducer from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (id) =>{

        const action = {
            type: 'delete',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggle = (id) =>{
        const action = {
            type: 'done',
            payload: id,
        }
        dispatch(action);
    }

    const handleAddTodo = (action) => {
        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
