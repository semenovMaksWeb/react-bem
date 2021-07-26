import React, {useEffect} from "react";
import "components/pagination/pagination.css"
import {Container} from "../container/container";

import {
    NavLink as Link, useLocation
} from "react-router-dom";
export interface iPaginationProps {
    page: number,
    nameQuery:string,
    url: string,
    countPage:number,
}

export const Pagination = (props: iPaginationProps) => {
    let pagination:{id:number, text: number}[] = [];
    const pageActive = Number(new URLSearchParams(useLocation().search).get("page")) || 1;
    const paginationIfStart = (): number => {
        if(pageActive <= Math.ceil(props.countPage / 2)) {
            return 1;
        }
        if(pageActive - Math.ceil((props.page / 2)) === 0 ) {
            return pageActive - Math.ceil((props.page / 2)) + 2
        }
        if(pageActive >=  Math.ceil((props.page / 2)) + 2 ) {
            console.log(Math.ceil((props.page / 2)) )
            return props.page - (props.countPage - 1)
        }
        return  pageActive-2


    }
    const paginationReset = () =>{
        pagination = [];
    }
    const paginationStart = () =>{
        if(props.page !== 0){
            pagination[0] = {
                id: 1,
                text: 1,
            }
        }
    }
    const paginationEnd = () =>{
        if(props.page !== 0){
            pagination.push({
                id: props.page,
                text: props.page,
            })
        }
    }

    const paginationCreate = (start: number) => {
        for (let i = 1; i < props.countPage; i++) {
            if (start > props.page){
                break;
            }
            pagination.push({text: start, id: start})
            start++;
        }
    }
    const pageCreate = () =>{
        paginationReset();
        paginationCreate(paginationIfStart());
        paginationStart();
        paginationEnd();
    }
    pageCreate();
    useEffect(()=>{
        pageCreate();
    }, [pageActive])

    return (
        <Container>
            <div className="pagination">
                { pagination.map((elem)=> (
                    <Link
                        exact
                        activeClassName="pagination__number_active"
                        key={elem.id} className="pagination__number"
                        to={props.url + "?" + props.nameQuery + "=" + (elem.text)} >{elem.text}
                    </Link>
                ))}
            </div>
        </Container>
    );
}