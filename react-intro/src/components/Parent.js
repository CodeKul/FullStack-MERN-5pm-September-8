import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {

    const [state, setState] = useState("")
    return (
        <div>
            <h1>Parent component....</h1>

            <Child name={state}/>
        </div>
    )
}
