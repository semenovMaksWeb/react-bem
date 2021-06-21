import {Itodo} from "interface/itodo/itodo";

export interface ItodoReducers {
    todo: Itodo[]
}


export enum TodoActionTypes {
    AXIOS_TODO_TODAY="AXIOS_TODO_TODAY",
}
export interface AddTodoAction {
    type: TodoActionTypes.AXIOS_TODO_TODAY,
    payload: Itodo[],
}

export type TodoAction  = AddTodoAction

export const initialState: ItodoReducers = {
    todo: [],
}