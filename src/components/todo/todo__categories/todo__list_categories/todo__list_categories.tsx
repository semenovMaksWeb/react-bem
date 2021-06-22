import React from "react";
import "components/todo/todo__categories/todo__list_categories/todo__list_categories.css"
import {TodoCategories} from "components/todo/todo__categories/todo__categories";
import {ItodoCategories} from "interface/itodo/itodo";
export interface itodoListCategoriesProps {
    categories: ItodoCategories[]
}

export const TodoListCategories = (props: itodoListCategoriesProps) => {
    return (
        <div className="todo__list_categories">
            {
                props.categories.map(e => (
                    <TodoCategories key={e.id} categories={e}  />
                ))
            }
        </div>
    );
}