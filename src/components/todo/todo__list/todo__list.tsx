import React from "react";
import {Itodo} from "interface/itodo/itodo";
import {Todo} from "../todo";
import {Container} from "components/container/container";
import  "./todo__list.css"
export interface iTodoListProps {
    todos: Itodo[]
}

export const TodoList = (props: iTodoListProps) => {
    return (
        <Container>
            <div className="todo__list">
                {
                    props.todos.map((e, index) => (
                        <Todo key={e.id} todo={e} index={index}/>
                    ))
                }
            </div>
        </Container>
    );
}