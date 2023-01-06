import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "./auth/reducer"
//import {reducer as AppReducer} from "./app/reducer"

const rootReducer = combineReducers({AuthReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))