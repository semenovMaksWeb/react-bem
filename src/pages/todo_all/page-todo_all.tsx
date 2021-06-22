import {useActions} from "hook/use-actions";
import {useTypeSelector} from "hook/use-typed-selector";
import {TodoList} from "components/todo/todo__list/todo__list";
import {useEffect} from "react";
import {NavSubmenuTodo} from "components/nav/nav_submenu/nav_submenu_todo/nav_submenu_todo";
import {Pagination} from "components/pagination/pagination";
import  {useLocation} from "react-router-dom";
export function PageTodoAll(){
    const pageActive = new URLSearchParams(useLocation().search).get("page");
    const {axiosTodoAll} = useActions();
    useEffect(()=>{
        console.log(" useEffect page-todo-active " + pageActive);
        if (!isNaN(Number(pageActive))){
            axiosTodoAll(Number(pageActive));
        }else {
            axiosTodoAll();
        }

    },[pageActive])
    const todo = useTypeSelector(state => state.todo.todo);
    const pageCount = useTypeSelector(state => state.todo.count);
    return(
        <>
            <NavSubmenuTodo  />
            <TodoList todos={todo}/>
            <Pagination nameQuery="/todo/all?page=" page={pageCount} />
        </>
    )
}
export default PageTodoAll;