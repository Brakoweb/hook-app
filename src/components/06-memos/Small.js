import React from 'react'

export const Small = React.memo( ({value}) => {
    console.log('Small component');
    return (
        <small>
            {value}
        </small>
    )
})
