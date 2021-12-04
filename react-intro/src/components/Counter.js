import React from 'react'

export default class Counter extends React.Component {

    
    constructor(){
        super()
        this.state = {Count: 0}   //state variable, data - object, array, string, number, boolean value, etc
    }


    // increment = ()=> {
    //     this.setState({Count: this.state.Count + 1})
    // }
   

    // https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d
    // state and props

    componentDidMount(){
        console.log("Component Mounted")
    }

    componentDidUpdate(){
        console.log("Component updated")
    }

    shouldComponentUpdate(){
        return true
    }
    

    render() {
        console.log("Component rendering/ Component Mounting")
    
        return (
            <div>
                <h1>Counter Application</h1>

                <h2>Count: {this.state.Count}</h2>

                <button onClick={()=>{ this.setState({Count: this.state.Count + 1})}}>Increment</button>

                <button onClick={()=>{ this.setState({Count: this.state.Count - 1})}}>Decrement</button>
            </div>
        )
    }
}
