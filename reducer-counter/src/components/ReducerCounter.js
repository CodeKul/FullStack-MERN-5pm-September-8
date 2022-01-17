import React, { useReducer } from 'react'
import { countReducer } from './reducers/countReducer'

export default function ReducerCounter() {

    const [count, sendAction] = useReducer(countReducer, {
        count: 0,
        incBy: 1
    })
    return (
        <div>

            <h1>Counter</h1>

            <h4>Increase By {count.incBy}</h4>

            <input type="range" name="number"
                value={count.incBy}
                min="1" max="20"
                onChange={(e) => {
                    sendAction({ type: "update", payload: Number(e.target.value) })
                }} />

            <h1>{count.count}</h1>

            <button onClick={() => sendAction({ type: "increment" })}>Increment</button>
            <button onClick={() => sendAction({ type: "decrement" })}>Decrement</button>
            <button onClick={() => sendAction({ type: "reset" })}>Reset</button>
        </div>
    )
}
