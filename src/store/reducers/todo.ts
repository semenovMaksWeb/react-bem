import {
    initialState,
    ItodoReducers,
    TodoAction,
    TodoActionTypes
} from "interface/itodo/itodo-reducers"

export const TodoReducer = (state = initialState, action: TodoAction): ItodoReducers => {
    switch (action.type) {
        case TodoActionTypes.AXIOS_TODO:
            return { ...state, todo: action.payload }
        case TodoActionTypes.SET_ACTIVE_TODO:
            state.todo[action.payload.index].active = action.payload.active;
            return state
        case TodoActionTypes.AXIOS_TODO_COUNT:
            return  {...state , countTodo: action.payload}
        case TodoActionTypes.AXIOS_TODO_CATEGORIES_COUNT:
            return  {...state , countCategories: action.payload}
        case  TodoActionTypes.AXIOS_TODO_CATEGORIES:
            return  {...state, categories: action.payload}
        default:
            return state
    }
}