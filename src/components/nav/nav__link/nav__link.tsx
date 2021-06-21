import React from "react";
import {classNameCreate} from "lib/class-name-create";
import {
    NavLink as Link
} from "react-router-dom";
import "components/nav/nav__link/nav__link.css";
export interface iNavLinkProps {
    children: React.PropsWithChildren<any>
    className?: string;
    to: string;
}

export const NavLink = (props: iNavLinkProps) => {
    const className = classNameCreate('nav__link', props.className);
    return (
        // <a href={props.to}>{props.children}</a>
        <Link exact  activeClassName="nav__link_active"  className={className} to={props.to}>{props.children}</Link>
    );
}