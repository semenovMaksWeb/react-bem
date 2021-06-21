import  { initialState, TodoAction ,ItodoReducers , TodoActionTypes } from "interface/itodo/itodo-reducers"

export const TodoReducer = (state = initialState, action: TodoAction): ItodoReducers => {
    switch (action.type) {
        case TodoActionTypes.AXIOS_TODO:
            return { todo: action.payload }
        default:
            return state
    }
}