import React from "react";
import {Nav} from "components/nav/nav";
import {iNavLinkProps, NavLink} from "components/nav/nav__link/nav__link";
import  "components/nav/nav_submenu/nav_submenu.css"
import {Container} from "components/container/container";
import {NavBox} from "components/nav/nav__box/nav__box";



export const NavSubmenuTodo = () => {
    const SubMenuArray:iNavLinkProps[] = [
        {to: "/todo", children: "Задачи на сегодня"},
        {to: "/todo/active", children: "Активные задачи"},
        {to: "/todo/news", children: "Создать новую задачу"},
        {to: "/todo/all", children: "Список задач"},
        {to: "/todo/categories", children: "Список категории задач"},
    ];
    return (<Nav className="nav_submenu">
        <Container>
            <NavBox>
                {SubMenuArray.map((e, index)=>
                    <NavLink key={index} to={e.to}>{e.children}</NavLink>
                )}
            </NavBox>
        </Container>
    </Nav>);
}