import {Itodo, ItodoApi} from "interface/itodo/itodo";
export  function mapTodoToday (todoApi:ItodoApi[]): Itodo[]
{
    return  todoApi.map(e=>{
        return {
            id: e.id,
            dateCreate: e.dateCreate,
            timeCosts: new  Date(),
            categories: e.categories,
            active: e.active,
            text: e.text,
            dateExecution: e.dateExecution
        }
    })
}