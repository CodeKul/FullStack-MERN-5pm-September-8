import React, { useContext } from 'react'
import { userContextObject } from './UserContext'

export default function UserCity() {
    const user = useContext(userContextObject)
    return (
        <div>
            <h1>{user.city}</h1>
        </div>
    )
}
