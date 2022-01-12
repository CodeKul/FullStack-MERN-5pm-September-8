import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux';


// state, action, dispatch, payload
// to do list usereducer

// https://blog.logrocket.com/guide-to-react-usereducer-hook/

// https://alligator.io/react/usereducer/


export default function CounterRed() {

    // const [state, action] = useReducer()
    // state will hold the data/state 
    // action will trigger or execute some function/statements


    const dispatch = useDispatch();


    return (
        <div>


            <h1>Counter</h1>

            <span>{count.incBy}</span>

            <input type="range"
                name="number"
                value={count.incBy}
                min="1"
                max="20"
                onChange={(e) => {
                    dispatch({ type: "update", payload: Number(e.target.value) })
                }}
            />


            <h3>{count.count}</h3>

            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}
