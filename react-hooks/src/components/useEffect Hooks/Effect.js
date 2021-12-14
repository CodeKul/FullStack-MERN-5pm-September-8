import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Effect() {

    const [data, setData] = useState([])


    let result;

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                result = response.data;
                console.log(response.data)

                setData(response.data);

                return result;

            })


    }, [result])

    result = data;


    return (
        <div>

            {result.map((item) => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card One</h5>
                            <p className="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum excepturi sed, tempora odio omnis non eaque et qui aut aliquam? Blanditiis, numquam ducimus voluptas earum voluptatum repudiandae voluptatem ullam?
                            </p>
                        </div>
                    </div>)
            })}

        </div>
    )
}
