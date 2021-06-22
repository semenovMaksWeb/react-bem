import React from "react";
import "components/pagination/pagination.css"
import {} from "react-router"
import {Container} from "../container/container";
import {
    NavLink as Link
} from "react-router-dom";
export interface iPaginationProps {
    page: number,
    nameQuery:string
}

export const Pagination = (props: iPaginationProps) => {
    return (
        <Container>
            <div className="pagination">
                { Array(props.page).fill(props.page).map((x,i)=> (
                    <Link key={i} className="pagination__number" to={props.nameQuery + (i+1)} >{i+1} </Link>
                ))}
            </div>
        </Container>
    );
}