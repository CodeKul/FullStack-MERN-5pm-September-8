import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

export default function Game() {

    const navigate = useNavigate()
    console.log(navigate)

    const [guess, setAnswer] = useState("");

    const [isCorrect, setCorrect] = useState(true);

    const element = <h3>Wrong Answer</h3>

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleClick = () => {
        if (guess === "React") {
            navigate("/result")
        } else {
            setCorrect(!isCorrect)
        }
    }
    return (
        <div>
            <h1>
                Guessing game
            </h1>

            <div>
                <label>
                    <b>Name a Frontend Library</b>
                </label>
            </div>

            <label htmlFor="guessLabel">Guess your Answer</label> <br/>

            <input type="text" value={guess} onChange={handleChange}/>

            <button onClick={handleClick}>Check Answer</button>

            <h3>{!isCorrect && element}</h3>
        </div>
    )
}
