import React, { useState } from 'react';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () =>{
        setShow(!show);
    }

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {show && <MultipleCustomHooks />}

            <button
                className='btn btn-outline-info mt-3'
                onClick={handleToggle}
            >
                Show / Hide
            </button>
        </div>
    )
}
