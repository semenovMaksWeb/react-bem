import {iNavLinkProps} from "components/nav/nav__link/nav__link";
import {NavSubmenu} from "components/nav/nav_submenu/nav_submenu";
import {useActions} from "hook/use-actions";
import {useTypedSelector} from "hook/use-typed-selector";
import {TodoList} from "../../components/todo/todo__list/todo__list";
import {Container} from "../../components/container/container";

export function PageTodo(){
    console.log("page-todo");
    const {axiosTodoToday} =  useActions();
    // axiosTodoToday();
    const todo =  useTypedSelector(state => state.todo.todo)
    const SubMenuArray:iNavLinkProps[] = [
        {to: "/todo", children: "Задачи на сегодня"},
        {to: "/todo/active", children: "Активные задачи"},
        {to: "/", children: "Создать новую задачу"},
        {to: "/", children: "Список задач"},
        {to: "/", children: "Список категории задач"},
    ];
    return(
        <>
            <NavSubmenu arrayLink={SubMenuArray} />
            <Container>
                <TodoList todos={todo}/>
            </Container>

        </>
    )
}

export default PageTodo;