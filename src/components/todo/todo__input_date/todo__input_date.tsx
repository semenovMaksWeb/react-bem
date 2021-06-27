import React from "react";
import "./todo__input_date.css"
import {IinputProps} from "components/input/input";
import {InputDate} from "components/input/input_date/input_date";

export interface iTodoInputDateProps extends IinputProps {
}

export const TodoInputDate = (props: iTodoInputDateProps) => {
    return (<InputDate {...props} className="todo__input"  />);
}   