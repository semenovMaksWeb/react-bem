import  { initialState, TodoAction ,ItodoReducers , TodoActionTypes } from "interface/itodo/itodo-reducers"

export const TodoReducer = (state = initialState, action: TodoAction): ItodoReducers => {
    switch (action.type) {
        case TodoActionTypes.AXIOS_TODO:
            return { count: state.count, todo: action.payload }
        case TodoActionTypes.SET_ACTIVE_TODO:
            state.todo[action.payload.index].active = action.payload.active;
            return state
        case TodoActionTypes.AXIOS_TODO_COUNT:
            return  {...state , count: action.payload}
        default:
            return state
    }
}