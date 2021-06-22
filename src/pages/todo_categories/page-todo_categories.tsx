import {useActions} from "hook/use-actions";
import {useTypeSelector} from "hook/use-typed-selector";
import {useEffect} from "react";
import {NavSubmenuTodo} from "components/nav/nav_submenu/nav_submenu_todo/nav_submenu_todo";
import {Pagination} from "components/pagination/pagination";
import  {useLocation} from "react-router-dom";
import {TodoListCategories} from "../../components/todo/todo__categories/todo__list_categories/todo__list_categories";
import {Container} from "../../components/container/container";
export function PageTodoCategories(){
    const pageActive = new URLSearchParams(useLocation().search).get("page");
    const {axiosTodoCategories} = useActions();
    useEffect(()=>{
        console.log(" useEffect page-todo-categories " + pageActive);
        if (!isNaN(Number(pageActive)) && pageActive ){
            axiosTodoCategories(Number(pageActive));
        }else {
            axiosTodoCategories();
        }
        console.log(pageCount)
    },[pageActive])
    const categories = useTypeSelector(state => state.todo.categories);
    const pageCount = useTypeSelector(state => state.todo.countCategories);
    return(
        <>
            <NavSubmenuTodo />
            <Container>
                <TodoListCategories  categories={categories}/>
            </Container>
            <Pagination nameQuery="/todo/categories?page=" page={pageCount} />
        </>
    )
}
export default PageTodoCategories;