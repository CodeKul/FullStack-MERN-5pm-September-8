import { authenticationReducer } from "./authenticationReducer"
import { bankReducer } from "./bankReducer"
import {combineReducers} from "redux"


export const rootReducer = combineReducers({
auth :authenticationReducer,
banking: bankReducer
})