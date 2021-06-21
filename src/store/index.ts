import {applyMiddleware, createStore} from "redux";
import { rootReducer } from "store/reducers";
import thunk from "redux-thunk";


export const store = createStore(rootReducer, applyMiddleware(thunk))