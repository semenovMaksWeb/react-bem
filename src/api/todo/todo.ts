import { ItodoApi, ItodoCategories} from "interface/itodo/itodo";
import {Pagination} from "../pagination";

const todo:ItodoApi[] = [
    {id:1, text: "Пострить одежду", active: false, dateCreate: new Date(2021, 4, 2 ), dateExecution: new Date(2021, 5, 22 ), categories: [{id: 1, name: "Домашние дела"}]},
    {id:2, text: "Изучить Vue", active: false, dateCreate: new Date(2021, 6, 18 ), dateExecution: new Date() , categories: [{id: 2, name: "Изучения Vue"} , {id:3 , name: "Изучения Web"}]},
    {id:3, text: "Сдать Математику", active: false, dateCreate: new Date(2021, 6, 15 ), dateExecution: new Date() , categories: [{id: 4, name: "Образование"} ]},
    {id:4, text: "Пострить одежду", active: true, dateCreate: new Date(2021, 4, 2 ), dateExecution: new Date(2021, 5, 22 ), categories: [{id: 1, name: "Домашние дела"}]},
    {id:5, text: "Изучить Vue", active: true, dateCreate: new Date(2021, 6, 18 ), dateExecution: new Date() , categories: [{id: 2, name: "Изучения Vue"} , {id:3 , name: "Изучения Web"}]},
    {id:6, text: "Сдать Математику", active: true, dateCreate: new Date(2021, 6, 15 ), dateExecution: new Date() , categories: [{id: 4, name: "Образование"} ]},
    {id:7, text: "Пострить одежду", active: true, dateCreate: new Date(2021, 4, 2 ), dateExecution: new Date(2021, 5, 22 ), categories: [{id: 1, name: "Домашние дела"}]},
    {id:8, text: "Изучить Vue", active: true, dateCreate: new Date(2021, 6, 18 ), dateExecution: new Date() , categories: [{id: 2, name: "Изучения Vue"} , {id:3 , name: "Изучения Web"}]},
    {id:9, text: "Сдать Математику", active: true, dateCreate: new Date(2021, 6, 15 ), dateExecution: new Date() , categories: [{id: 4, name: "Образование"} ]},
    {id:10, text: "Пострить одежду", active: true, dateCreate: new Date(2021, 4, 2 ), dateExecution: new Date(2021, 5, 22 ), categories: [{id: 1, name: "Домашние дела"}]},
    {id:11, text: "Изучить Vue", active: true, dateCreate: new Date(2021, 6, 18 ), dateExecution: new Date() , categories: [{id: 2, name: "Изучения Vue"} , {id:3 , name: "Изучения Web"}]},
    {id:12, text: "Сдать Математику", active: true, dateCreate: new Date(2021, 6, 15 ), dateExecution: new Date() , categories: [{id: 4, name: "Образование"} ]},
    {id:13, text: "Пострить одежду", active: true, dateCreate: new Date(2021, 4, 2 ), dateExecution: new Date(2021, 5, 22 ), categories: [{id: 1, name: "Домашние дела"}]},
    {id:14, text: "Изучить Vue", active: true, dateCreate: new Date(2021, 6, 18 ), dateExecution: new Date() , categories: [{id: 2, name: "Изучения Vue"} , {id:3 , name: "Изучения Web"}]},
    {id:15, text: "Сдать Математику", active: true, dateCreate: new Date(2021, 6, 15 ), dateExecution: new Date() , categories: [{id: 4, name: "Образование"} ]},
]
const categories:ItodoCategories[] = [
    {id: 1, name: 'Домашние дела'},
    {id: 2, name: "Изучения Vue"},
    {id: 3, name: "Изучения Web"},
    {id: 4, name: "Изучения React"},
    {id: 5, name: "Образование"},
]
export  function TodoToday():ItodoApi[]{
    return  todo.filter(e => e.dateExecution === new Date())
}
export  function  TodoActive():ItodoApi[]{
    return  todo.filter(e => !e.active)
}
export  function  TodoActiveAll(page: number, limit: number = 5):ItodoApi[]{
    const  {start, end} = Pagination(page, limit)
    return todo.splice(start, end)

}
export  function  TodoListCategories(page: number, limit: number = 5):ItodoCategories[]{
    const  {start, end} = Pagination(page, limit)
    return categories.splice(start, end)
}
export function  TodoListCreate(todo: ItodoApi){

}