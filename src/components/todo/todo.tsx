import React from "react";
import {Itodo} from "interface/itodo/itodo";
import  "components/todo/todo.css"
export interface iTodoProps {
    todo: Itodo
}

export const  Todo = ( props: iTodoProps) => {
    const  className = props.todo.active ? "todo__element todo__element_completed" : "todo__element todo__element_performed";
    return (
    <div className={className} >
        <p className="todo__text">
            {props.todo.text}
        </p>
    </div>
    );
}