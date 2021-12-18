import React, { createContext, useState } from 'react'


export const userContextObject = createContext()  //context object
export default function UserContext(props) {
    const [user, setUser] = useState({
        fname: "Sanket Bhosale",
        city: "Pune",
        designation: "SWE"
    })
    return (
        <div>
            <userContextObject.Provider value={user}>
                {props.children}
            </userContextObject.Provider>
        </div>
    )
}
