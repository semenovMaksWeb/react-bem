import {Dispatch} from "redux";
import {TodoActionTypes, TodoAction, SetActiveTodoPayload} from "interface/itodo/itodo-reducers";

import  {mapTodoToday} from  "map/mapTodoToday"
import {TodoToday, TodoActive, TodoAll, TodoAllLength} from "api/todo/todo"
export const axiosTodoToday = () => {
    return (dispatch: Dispatch<TodoAction>) => {
        const todoApi =  TodoToday();
        dispatch({
            type: TodoActionTypes.AXIOS_TODO,
            payload: mapTodoToday(todoApi),
        })
    }
}
export const axiosTodoActive = () => {
    return (dispatch: Dispatch<TodoAction>) => {
        const todoApi =  TodoActive();
        dispatch({
            type: TodoActionTypes.AXIOS_TODO,
            payload: mapTodoToday(todoApi)
        })
    }
}
export const axiosTodoAll = (page: number = 1) => {
    return (dispatch: Dispatch<TodoAction>) => {
        console.log(page)
        const todoApi =  TodoAll(page);
        dispatch({
            type: TodoActionTypes.AXIOS_TODO,
            payload: mapTodoToday(todoApi)
        })
        dispatch({
            type: TodoActionTypes.AXIOS_TODO_COUNT,
            payload: TodoAllLength()
        })
    }
}
export const setActiveTodo = (params:SetActiveTodoPayload) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({
            type: TodoActionTypes.SET_ACTIVE_TODO,
            payload: params
        })
    }
}
