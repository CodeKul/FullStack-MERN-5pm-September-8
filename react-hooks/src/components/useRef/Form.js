import React, { useRef } from 'react'

export default function Form() {
    let InputRef = useRef();

    console.log(InputRef)

    const changeColor = ()=> {
InputRef.current.style.color = "green"
    }
    
    
    return (
        <div>
            <input type="text" />

            <button onClick={changeColor}>Submit</button>

            <p ref={InputRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque accusantium repudiandae ut optio numquam earum labore perspiciatis excepturi, iste ullam provident reiciendis est magnam aliquid animi, molestiae a dolore! Error.</p>
        </div>
    )
}
