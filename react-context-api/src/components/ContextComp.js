import React, { Component } from 'react'
import { Children } from 'react/cjs/react.production.min';
import InnerChild from './InnerChild';


let userContext = React.createContext();

export default class ContextComp extends Component {

    constructor() {
        super();
        this.state = {
            fullName: "Sanket Bhosale",
            city: "Pune"
        }

        console.log(userContext)
    }

    render() {
        return (
            <div>
                <userContext.Provider value={this.state}>

                 {this.props.children}

                </userContext.Provider>
            </div>
        )
    }
}
