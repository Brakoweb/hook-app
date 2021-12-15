import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            <pre>{JSON.stringify(context, null, 3)}</pre>
        </div>
    )
}
