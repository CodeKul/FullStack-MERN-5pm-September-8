import { combineReducers } from "redux";
import { countReducer } from "./counterreduce";

export const rootReducer = combineReducers({
    countReducer: countReducer
})