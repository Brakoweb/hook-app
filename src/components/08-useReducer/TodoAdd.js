import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        reset();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        handleAddTodo(action);
    }
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Learn...'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />
                <button type='submit' className='btn btn-outline-primary mt-1 col-12'>Add</button>
            </form>
        </>
    )
}
