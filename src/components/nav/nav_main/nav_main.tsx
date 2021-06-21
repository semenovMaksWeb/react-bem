import React from "react";
import {Nav} from "components/nav/nav";
import {NavLink} from "components/nav/nav__link/nav__link";
import  "components/nav/nav_main/nav_main.css"
import {Container} from "../../container/container";
import {NavBox} from "../nav__box/nav__box";

export const NavMain = () => {
    const arrayLink = [
        {to: "/", text: "Главная"},
        {to: "/todo", text: "Задачи"},
        {to: "/note", text: "Заметки"},
        {to:"/setting", text: "Настройки"}
    ]
    return (<Nav className="nav_main">
        <Container>
            <NavBox>
                {arrayLink.map((e, index)=>
                    <NavLink key={index} to={e.to}>{e.text}</NavLink>
                )}
            </NavBox>
        </Container>
    </Nav>);
}