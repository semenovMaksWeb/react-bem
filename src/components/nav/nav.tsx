import React from "react";
import {classNameCreate} from "lib/class-name-create";
export  interface  iNavProps{
    children: React.PropsWithChildren<any>
    className?: string;
}
export const Nav = (props:iNavProps) => {
    const className = classNameCreate('nav', props.className);
    return(<nav className={className}>{props.children}</nav>);
}