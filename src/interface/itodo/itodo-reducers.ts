import {Itodo} from "interface/itodo/itodo";

export interface ItodoReducers {
    todo: Itodo[],
    // onLoad: boolean,
}


export enum TodoActionTypes {
    AXIOS_TODO="AXIOS_TODO",
}
export interface AddTodoAction {
    type: TodoActionTypes.AXIOS_TODO,
    payload: Itodo[],
}

export type TodoAction  = AddTodoAction

export const initialState: ItodoReducers = {
    todo: [],
    // onLoad: false,
}