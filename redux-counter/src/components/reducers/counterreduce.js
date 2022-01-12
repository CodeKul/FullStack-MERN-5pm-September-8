const initialState = {
    count: 0,
    inBy: 1
}


export const countReducer = (state = initialState, action)=> {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + state.incBy, incBy: state.incBy };

        case "decrement":
            return { ...state, count: state.count - state.incBy, incBy: state.incBy }

        case "reset":
            return { ...state, count: 0, incBy: 0 }

        case "update":
            return { ...state, count: state.count, incBy: action.payload }


        default:
            return { count: state.count }


    };


}
