import React, { useMemo, useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import heavyTask from '../../helpers/heavyTask';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const {state:counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    const memoHeavyTask = useMemo(() => heavyTask(counter), [counter]);
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{memoHeavyTask}</p>
            <button className='btn btn-primary mr-3' onClick={() => increment()}>+1</button>
            <button 
                className='btn btn-outline-primary ml-3' 
                onClick={() => setShow(!show)}
            >
                Show / Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}