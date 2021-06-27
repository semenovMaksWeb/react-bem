 import {NavSubmenuTodo} from "components/todo/nav_submenu_todo/nav_submenu_todo";
 import {Container} from "components/container/container";
 import {TodoForm} from "../../components/todo/todo__form/todo__form";
export function PageTodoNews(){
    return(
        <>
            <NavSubmenuTodo />
            <Container>
              <TodoForm/>
            </Container>

        </>
    )
}
export default PageTodoNews;