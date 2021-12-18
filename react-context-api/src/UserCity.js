import React, { useContext } from 'react'
import { userContext } from './components/UserProvider'

export default function UserCity() {
    const [userInfo, setUserInfo] = useContext(userContext)
    return (
        <div>
            <h1>{userInfo.city}</h1>
        </div>
    )
}
