import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li> <a href="/home">Home</a></li>
                    <li> <Link to="/contact">Contact</Link> </li>
                    <li> <Link to="/about">About</Link>
                    </li>       
                    <Link to="/footer">Footer</Link>  </ul>
            </nav>
        </div>
    )
}
