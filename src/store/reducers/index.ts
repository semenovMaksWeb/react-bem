import {combineReducers} from "redux";
import { TodoReducer } from "store/reducers/todo";
// import {authReducer } from "store/reducers/AuthReducer";
//
export const rootReducer = combineReducers({
    todo: TodoReducer,

})

export type RootState = ReturnType<typeof rootReducer>