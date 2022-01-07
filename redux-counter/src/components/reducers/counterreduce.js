const InitialState = {
    count: 0,
    addBy:1
}

function CounterReduce (state=InitialState, action){
    switch(action.type){
        case "increment":
            return ({
                count: state.count + state.addBy
            })


            case "decrement":
                return ({
                    count: state.count - state.addBy
                })  
        

    }

}