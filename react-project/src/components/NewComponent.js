import React, { useState } from 'react'

export default function NewComponent() {

    const [data, setData]= useState("Sanket")
    
    return (
        <div>
            <h1>Hello {data} Welcome, to React</h1>
        </div>
    )
}
