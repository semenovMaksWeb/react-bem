import React from "react";
import {Form} from "components/form/form";
import  "./todo__form.css"
import {TodoInput} from "./todo__input/todo__input";
export interface iTodoFormProps {
}

export const TodoForm = (props: iTodoFormProps) => {
    return (
        <Form className="todo__form">
            <TodoInput placeholder="Текст"/>
            <TodoInput placeholder="Дата создания" type="date" />
            <TodoInput placeholder="Дата выполнения" type="date" />
        </Form>
    );
}