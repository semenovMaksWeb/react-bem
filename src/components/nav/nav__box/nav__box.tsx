import React from "react";
import {classNameCreate} from "lib/class-name-create";
import "components/nav/nav__box/nav__box.css";
export interface iNavBoxProps {
    children: React.PropsWithChildren<any>
    className?: string;
}

export const NavBox = (props: iNavBoxProps) => {
    const className = classNameCreate('nav__box', props.className);
    return (<div className={className}>
            {props.children}
    </div>);
}