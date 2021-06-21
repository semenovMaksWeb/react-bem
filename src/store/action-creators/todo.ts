import {Dispatch} from "redux";
import {TodoActionTypes, TodoAction} from "interface/itodo/itodo-reducers";

import  {mapTodoToday} from  "map/mapTodoToday"
import {TodoToday, TodoActive} from "api/todo/todo"
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
