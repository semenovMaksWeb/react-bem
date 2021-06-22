import React from "react";
import "components/todo/todo__categories/todo__categories.css"
import {ItodoCategories} from "interface/itodo/itodo";
export interface itodoCategoriesProps {
    categories: ItodoCategories
}

export const TodoCategories = (props: itodoCategoriesProps) => {
    return (
        <div className="todo__categories">
            {props.categories.name}
        </div>
    );
}