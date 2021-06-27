import {Dispatch} from "redux";
import {TodoActionTypes, TodoAction, SetActiveTodoPayload} from "interface/itodo/itodo-reducers";

import {mapTodo, mapTodoCategories} from "map/mapTodo"
import {TodoToday, TodoActive, TodoAll, TodoAllLength, TodoListCategories, TodoCategoriesLength} from "api/todo/todo"
export const axiosTodoToday = () => {
    return (dispatch: Dispatch<TodoAction>) => {
        const todoApi =  TodoToday();
        dispatch({
            type: TodoActionTypes.AXIOS_TODO,
            payload: mapTodo(todoApi),
        })
    }
}
export const axiosTodoActive = () => {
    return (dispatch: Dispatch<TodoAction>) => {
        const todoApi =  TodoActive();
        dispatch({
            type: TodoActionTypes.AXIOS_TODO,
            payload: mapTodo(todoApi)
        })
    }
}
export const axiosTodoAll = (page: number = 1) => {
    return (dispatch: Dispatch<TodoAction>) => {
        console.log(page)
        const todoApi =  TodoAll(page, 2);
        dispatch({
            type: TodoActionTypes.AXIOS_TODO,
            payload: mapTodo(todoApi)
        })
        dispatch({
            type: TodoActionTypes.AXIOS_TODO_COUNT,
            payload: TodoAllLength(2)
        })
    }
}
export const axiosTodoCategories = (page: number = 1) => {
    return (dispatch: Dispatch<TodoAction>) => {
        const todoCategoriesApi =  TodoListCategories(page);
        dispatch({
            type: TodoActionTypes.AXIOS_TODO_CATEGORIES,
            payload: mapTodoCategories(todoCategoriesApi)
        })
        dispatch({
            type: TodoActionTypes.AXIOS_TODO_CATEGORIES_COUNT,
            payload: TodoCategoriesLength()
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
