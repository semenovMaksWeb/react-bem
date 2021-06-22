import React from "react";
import {Form} from "components/form/form";
import  "./todo__form.css"
import {TodoInput} from "./todo__input/todo__input";
import {FormTitle} from "components/form/form__title/form__title";
import {TodoInputDate} from "./todo__input/todo__input_date/todo__input_date";
export interface iTodoFormProps {
}

export const TodoForm = (props: iTodoFormProps) => {
    return (
        <Form className="todo__form">
            <FormTitle children="Создания задания"/>
            <TodoInput placeholder="Текст"/>
            <TodoInputDate placeholder="Дата создания" />
            <TodoInputDate placeholder="Дата выполнения" />
        </Form>
    );
}