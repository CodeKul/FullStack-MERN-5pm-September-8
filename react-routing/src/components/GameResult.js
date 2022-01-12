import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function GameResult() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/game")
    }
    return (
        <div>
            <h1>Success</h1>

            <button onClick={handleClick}>Go Back</button>
        </div>
    )
}
