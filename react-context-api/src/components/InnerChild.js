import React from 'react'
import InnerChild2 from './InnerChild2'
import { userContext } from "./ContextComp"

export default function InnerChild({ name }) {


    return (
        <div>


            {/* <userContext.Consumer>
                Thanks {name} for Subscription.
            </userContext.Consumer>

            <InnerChild2 fname={name} /> */}
        </div>
    )
}
