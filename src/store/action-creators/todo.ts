import {Dispatch} from "redux";
import {TodoActionTypes, TodoAction} from "interface/itodo/itodo-reducers";

import  {mapTodoToday} from  "map/mapTodoToday"
export const axiosTodoToday = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        dispatch({
            type: TodoActionTypes.AXIOS_TODO_TODAY,
            payload: mapTodoToday()
        })
    }
}
