import  {TodoToday} from  "api/todo/todo"
import { Itodo } from "interface/itodo/itodo";
export  function mapTodoToday (): Itodo[]
{
    return  TodoToday().map(e=>{
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