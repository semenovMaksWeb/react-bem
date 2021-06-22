import {Itodo, ItodoApi, ItodoCategories, ItodoCategoriesApi} from "interface/itodo/itodo";
export  function mapTodo (todoApi:ItodoApi[]): Itodo[]
{
    return  todoApi.map(e=>{
        return {
            id: e.id,
            dateCreate: e.dateCreate,
            timeCosts: new  Date(),
            categories: mapTodoCategories(e.categories),
            active: e.active,
            text: e.text,
            dateExecution: e.dateExecution
        }
    })
}
export  function mapTodoCategories (todoApi:ItodoCategoriesApi[]): ItodoCategories[]
{
    return  todoApi.map(e=>{
        return {
            id: e.id,
            name: e.name
        }
    })
}