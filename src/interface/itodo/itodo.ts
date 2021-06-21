import {Icategories} from "interface/icategories/icategories";

export interface Itodo{
    id: number,
    text: string,
    active: boolean,
    dateCreate: Date,
    dateExecution: Date,
    categories: ItodoCategories[]
    timeCosts: Date,
}
export  interface ItodoCategories extends  Icategories {}
export  interface ItodoApi{
    id: number,
    text: string,
    active: boolean,
    dateCreate: Date,
    dateExecution: Date,
    categories: ItodoCategories[]
}