import React from "react";
import "components/todo/todo__input/todo__input.css"
import {IinputProps, Input} from "components/input/input";


export interface iTodoInputProps extends IinputProps {
}

export const TodoInput = (props: iTodoInputProps) => {
    return (<Input {...props} className="todo__input"  />);
}   