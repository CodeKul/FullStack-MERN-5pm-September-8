import React from 'react'
import InnerChild from './InnerChild'

export default function Message({name}) {
    return (
        <div>
            Hello {name} Welcome to Javascript Environment.

            <InnerChild name={name}/>
        </div>
    )
}
