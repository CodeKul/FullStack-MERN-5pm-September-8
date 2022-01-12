import React from 'react'


export default function Login() {
    const data = useSelector(state => data.state)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch("login")}>{isLogged ? `Login` : `Logout`}</button>
        </div>
    )
}
