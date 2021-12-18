import React, { useContext } from 'react'
import { userContext } from './UserProvider'

export default function UserData() {
    const [userInfo, setUserInfo] = useContext(userContext)

    console.log(userInfo)
    return (
        <div>
            
        </div>
    )
}
