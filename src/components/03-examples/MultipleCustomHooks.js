import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const {state:counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote, author} = (!!data && data[0]) || (!!data && {quote:'', author:''}); 

    useEffect(() => {
        quote === '' && increment();
    }, [quote, increment]);
    
    
    return (
        <div>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {
                loading 
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div> 
                    )
                :
                    (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-3'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }

            <button 
                className='btn btn-primary' 
                onClick={() => increment()}
                disabled={loading}
            >
                Next Quote
            </button>

        </div>
    )
}
