import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const Layout = () => {
    const {state:counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = (!!data && data[0]) || (!!data && {quote:''}); 

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useEffect(() => {
        quote === '' && increment();
    }, [quote, increment]);

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])
    
    
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-end'>
                <p className='mb-3' ref={pTag}>{quote}</p>
            </blockquote>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <button 
                className='btn btn-primary' 
                onClick={() => increment()}
            >
                Next Quote
            </button>

        </div>
    )
}
