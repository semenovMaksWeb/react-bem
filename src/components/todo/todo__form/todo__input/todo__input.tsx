import React from "react";
import "./todo__input.css"
import {IinputProps, Input} from "components/form/input/input";

export interface iTodoInputProps extends IinputProps {
}

export const TodoInput = (props: iTodoInputProps) => {
    return (<Input className="todo__input"  {...props}  />);
}