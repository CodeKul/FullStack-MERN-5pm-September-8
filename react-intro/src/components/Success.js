import React from 'react'

export default function Success({formdata}) {
    return (
        <div>

            <h1>Data through Props</h1>
            Name : {formdata.name}
            City: {formdata.city}
        </div>
    )
}
