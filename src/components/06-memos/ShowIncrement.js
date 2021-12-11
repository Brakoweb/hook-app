import React from 'react'

export const ShowIncrement = React.memo( ({increment}) => {
    console.log('ShowIncrement Component...')
    return (
        <div>
            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                increment
            </button>
        </div>
    )
});
