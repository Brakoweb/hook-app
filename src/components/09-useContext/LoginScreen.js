import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newUser = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
        }
        setUser(newUser);
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    className='form-control' 
                    type='text' name='name' 
                    autoComplete='false' 
                    placeholder='Name'
                />
                <input 
                    className='form-control' 
                    type='text' name='email' 
                    autoComplete='false' 
                    placeholder='email@email.com'
                />
                <button
                    className='btn btn-dark mt-3'
                    type='submit'
                    name='add'>
                    Add User
                </button>  
            </form>
            
        </div>
    )
}
