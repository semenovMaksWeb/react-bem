import {Itodo} from "interface/itodo/itodo";

export interface ItodoReducers {
    todo: Itodo[],
    count: number,
}


export enum TodoActionTypes {
    AXIOS_TODO_COUNT="AXIOS_TODO_COUNT",
    AXIOS_TODO="AXIOS_TODO",
    SET_ACTIVE_TODO="SET_ACTIVE_TODO"

}
export interface AxiosTodo {
    type: TodoActionTypes.AXIOS_TODO,
    payload: Itodo[],
}
export interface SetActiveTodo {
    type: TodoActionTypes.SET_ACTIVE_TODO,
    payload: SetActiveTodoPayload
}
export  interface AxiosTodoCount{
    type: TodoActionTypes.AXIOS_TODO_COUNT,
    payload: number
}
export interface SetActiveTodoPayload{
    active: boolean,
    index: number
}

export type TodoAction  = AxiosTodo | SetActiveTodo | AxiosTodoCount

export const initialState: ItodoReducers = {
    todo: [],
    count: 0,
    // onLoad: false,
}