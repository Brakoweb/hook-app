import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {email, name, password} = formValues;

    useEffect(() => {
        console.log('email changed...');
    }, [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    }
    
    return (
        <form onSubmit={handleSubmit}> 
            <h1>useEffect</h1>
            <hr />
            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                    placeholder='Name'
                />
            </div>

            <div className='form-group'>
                <input 
                    type='text'
                    name='email'
                    className='form-control'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                    placeholder='email@mail.com'
                />
            </div>

            <div className='form-group'>
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    value={password}
                    onChange={handleInputChange}
                    placeholder='paswword'
                />
            </div>

            <button type='submit' className='btn btn-primary'>Save</button>

        </form> 
    )
}