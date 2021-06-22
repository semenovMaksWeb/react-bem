import React from "react";
import "./form__title.css"
import {classNameCreate} from "lib/class-name-create";
export interface iFormTitle {
    children: React.PropsWithChildren<any>,
    className?: string,
}

export const FormTitle = (props: iFormTitle) => {
    const className = classNameCreate('form__title', props.className)
    return (<h3 className={className}>{props.children}</h3>);
}