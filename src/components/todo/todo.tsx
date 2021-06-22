import React, {useEffect, useState} from "react";
import {Itodo} from "interface/itodo/itodo";
import  "components/todo/todo.css"
import {TodoListCategories} from "./todo__categories/todo__list_categories/todo__list_categories";
import  {useActions} from "hook/use-actions"

export interface iTodoProps {
    todo: Itodo,
    index: number
}

export const  Todo = ( props: iTodoProps) => {
    const {setActiveTodo} = useActions();
    useEffect(() => {
        setClassName(props.todo.active ? "todo__element todo__element_completed" : "todo__element todo__element_performed")
    }, [])
    const [className, setClassName] = useState<string>()
    const toggleActive = () =>{
        setActiveTodo({
            index:props.index,
            active: !props.todo.active
        })
        console.log(props.todo);
        setClassName(props.todo.active ? "todo__element todo__element_completed" : "todo__element todo__element_performed")
    }
    return (
    <div className={className} >
        <p className="todo__text" onClick={toggleActive}>
            {props.todo.text}
        </p>
        <div className="todo__date todo__date_create">
            Дата создания:
        </div>
        <div className="todo__date todo__date_execution">
            Дата выполнения:
        </div>
        <TodoListCategories categories={props.todo.categories}/>
    </div>
    );
}