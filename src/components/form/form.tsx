import React, {FormHTMLAttributes} from "react";
import {classNameCreate} from "../../lib/class-name-create";
import "./form.css"
export interface iFormProps extends FormHTMLAttributes<any> {
    children: React.PropsWithChildren<any>
}

export const Form = (props: iFormProps) => {
    const className = classNameCreate('form', props.className);
    return (
        <form className={className}>
            <div className="form__box">
                {props.children}
            </div>
        </form>
    );
}