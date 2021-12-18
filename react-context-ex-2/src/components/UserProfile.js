import React, { createContext, useContext } from 'react'
import { userContextObject } from './UserContext'

const profileContextObject = createContext()
export default function UserProfile(props) {
    const user = useContext(userContextObject)
    return (
        <div>

            <profileContextObject.Provider>
                {props.children}
            </profileContextObject.Provider>
            <h1>{user.fname}</h1>
        </div>
    )
}
