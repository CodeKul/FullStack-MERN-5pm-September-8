import React, { useState } from 'react'

export default function Form2() {

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [designation, setDesignation] = useState("")
    const [city, setCity] = useState("")
    const [age, setAge] = useState("")
    // const [userinfo, setuserinfo] = useState({
    //     name: "",
    //     gender:"",
    //     designation: "",
    //     city: "",
    //     age: 0
    // })


const handleNameChange = (e)=> {
    // setuserinfo({...userinfo, [e.target.name]:e.target.value})
    setName(e.target.value)
    setCity(e.target.value)
    
}

const handleCityChange = (e)=> {
    // setuserinfo({...userinfo, [e.target.name]:e.target.value})
    // setName(e.target.value)
    setCity(e.target.value)
    
}

const handleDesignationChange = (e)=> {
    // setuserinfo({...userinfo, [e.target.name]:e.target.value})
    // setName(e.target.value)
    setDesignation(e.target.value)
    
}
    
    

    // console.log(userinfo.name)
    // set state variable value for radio input button



    return (
        <div>

            <h1>Forms in React</h1>
            <form>

                <label>Full Name</label>
                <input name='name' onChange={handleNameChange} value={name} type="text" />
                <input name='city' onChange={handleCityChange} value={city} type="text" />

                <input name='designation' onChange={handleDesignationChange} value={designation} type="text" />

                <button>Submit</button>

                {/* {console.log("Form data: ", userinfo)} */}
                {console.log(name)}
            </form>
        </div>
    )
}
