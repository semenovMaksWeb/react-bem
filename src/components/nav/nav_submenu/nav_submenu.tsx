import React from "react";
import {Nav} from "components/nav/nav";
import {iNavLinkProps, NavLink} from "components/nav/nav__link/nav__link";
import  "components/nav/nav_submenu/nav_submenu.css"
import {Container} from "components/container/container";
import {NavBox} from "components/nav/nav__box/nav__box";

interface iNavSubmenuProps {
    arrayLink: iNavLinkProps[]
}

export const NavSubmenu = (props:iNavSubmenuProps) => {
    return (<Nav className="nav_submenu">
        <Container>
            <NavBox>
                {props.arrayLink.map((e, index)=>
                    <NavLink key={index} to={e.to}>{e.children}</NavLink>
                )}
            </NavBox>
        </Container>
    </Nav>);
}