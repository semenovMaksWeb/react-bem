import {useActions} from "hook/use-actions";
import {useTypeSelector} from "hook/use-typed-selector";
import {TodoList} from "components/todo/todo__list/todo__list";
import {useEffect} from "react";
import {NavSubmenuTodo} from "../../components/todo/nav_submenu_todo/nav_submenu_todo";

export function PageTodo(){
    const {axiosTodoToday} =  useActions();
    console.log("page-todo");
    useEffect(()=>{
        axiosTodoToday();
    },[])
    const todo = useTypeSelector(state => state.todo.todo);

    return(
        <>
            <NavSubmenuTodo />
            <TodoList todos={todo}/>
        </>
    )
}
export default PageTodo;