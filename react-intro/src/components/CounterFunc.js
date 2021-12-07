import React, { useEffect, useState } from 'react'

export default function CounterFunc() {

    let initialState = {
        counter: 0
    }


    const [count, setCount] = useState(initialState)

    
    useEffect(() => {
        console.log("rendering")

    }, [count.counter])



    console.log(count)


    function handleIncrement() {
        setCount(count.counter + 1)
    }


    function handleDecrement() {
        setCount(count.counter - 1)
    }

    return (
        <div>
            <h1>Functional Component</h1>

            <h1>Count: {count.counter} </h1>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
