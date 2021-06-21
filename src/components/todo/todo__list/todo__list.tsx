import React from "react";
import {Itodo} from "interface/itodo/itodo";
import {Todo} from "../todo";
import {Container} from "../../container/container";

export interface iTodoListProps {
    todos: Itodo[]
}

export const TodoList = (props: iTodoListProps) => {
    return (
        <Container>
            <div className="todo__list">
                {
                    props.todos.map((e, index) => (
                        <Todo key={index} todo={e}/>
                    ))
                }
            </div>
        </Container>
    );
}