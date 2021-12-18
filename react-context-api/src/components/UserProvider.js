import React, { createContext, useState } from 'react'


export const userContext = createContext()

export default function UserProvider(props) {
    const [userInfo, setUserInfo] =useState({
        fname: "Sanket Bhosale",
        city: "Pune",
        designation: "SWE",
        skills: ["Java", "Javascript", "ReactJs"] 
    })

   
    return (
        <div>
            <userContext.Provider value={[userInfo, setUserInfo]}>
                {props.children}
            </userContext.Provider>
        </div>
    )
}
