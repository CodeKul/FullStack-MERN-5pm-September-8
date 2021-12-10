import React, { useState } from 'react'
import Success from './Success'

export default function Form() {

    const [userinfo, setuserinfo] = useState({
        name: "",
        gender: "",
        designation: "",
        city: "",
        age: 0,
        tech:""
    })





    const handleChange = (event) => {
        
        setuserinfo({ ...userinfo, [event.target.name]: event.target.value })

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


                <label htmlFor="">Gender</label>


                <input type="radio" name="gender" onChange={handleChange} value="male" id="" />
                <label htmlFor="">Male</label>

                <input type="radio" name="gender" onChange={handleChange}  value="female" id="" />
                <label htmlFor="">FeMale</label>

                <select onChange={handleChange} name="tech" id="">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">Javascript</option>
                </select>
                <button>Submit</button>

                {console.log("Form data: ", userinfo)}
                {console.log(userinfo.name)}
                {console.log(userinfo.gender)}
            </form>


            <Success formdata={userinfo}/>
        </div>
    )
}
