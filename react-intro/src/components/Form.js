import React, { useState } from 'react'

export default function Form() {

    const [userinfo, setuserinfo] = useState({
        name: "",
        gender:"",
        designation: "",
        city: "",
        age: 0
    })


const handleChange = (e)=> {
    setuserinfo({...userinfo, [e.target.name]:e.target.value})
}
    
    

    // console.log(userinfo.name)
    // set state variable value for radio input button



    return (
        <div>

            <h1>Forms in React</h1>
            <form>

                <label>Full Name</label>
                <input name='name' onChange={handleChange} value={userinfo.name} type="text" />
                <input name='city' onChange={handleChange} value={userinfo.city} type="text" />

                <input name='designation' onChange={handleChange} value={userinfo.designation} type="text" />

                <button>Submit</button>

                {console.log("Form data: ", userinfo)}
                {console.log(userinfo.name)}
            </form>
        </div>
    )
}
