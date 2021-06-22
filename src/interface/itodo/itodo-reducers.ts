import {Itodo, ItodoCategories} from "interface/itodo/itodo";

export interface ItodoReducers {
    todo: Itodo[],
    countTodo: number,
    countCategories: number,
    categories: ItodoCategories[]
}


export enum TodoActionTypes {
    AXIOS_TODO_COUNT="AXIOS_TODO_COUNT",
    AXIOS_TODO="AXIOS_TODO",
    SET_ACTIVE_TODO="SET_ACTIVE_TODO",
    AXIOS_TODO_CATEGORIES="AXIOS_TODO_CATEGORIES",
    AXIOS_TODO_CATEGORIES_COUNT="AXIOS_TODO_CATEGORIES_COUNT",

}
export interface AxiosTodo {
    type: TodoActionTypes.AXIOS_TODO,
    payload: Itodo[],
}
export interface AxiosTodoCategories {
    type: TodoActionTypes.AXIOS_TODO_CATEGORIES,
    payload: ItodoCategories[],
}
export interface SetActiveTodo {
    type: TodoActionTypes.SET_ACTIVE_TODO,
    payload: SetActiveTodoPayload
}
export  interface AxiosTodoCount{
    type: TodoActionTypes.AXIOS_TODO_COUNT,
    payload: number
}
export  interface AxiosTodoCategoriesCount{
    type: TodoActionTypes.AXIOS_TODO_CATEGORIES_COUNT,
    payload: number
}
export interface SetActiveTodoPayload{
    active: boolean,
    index: number
}

export type TodoAction  = AxiosTodo | SetActiveTodo | AxiosTodoCount | AxiosTodoCategories | AxiosTodoCategoriesCount

export const initialState: ItodoReducers = {
    todo: [],
    countTodo: 0,
    countCategories: 0,
    categories: [],

}