import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterWithCustomHook = () => {
    const {state, increment, decrement, reset} = useCounter(100);
    const factor = 2;
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />

            <button className='btn btn-success' onClick={() => increment(factor)}> + {factor}</button>
            <button className='btn btn-primary' onClick={() => reset()}>Reset</button>
            <button className='btn btn-danger' onClick={() => decrement(factor)}> - {factor}</button>
        </>
    )
}
