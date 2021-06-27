import React, {useState} from "react";
import {IinputProps, Input} from "../input";

export interface iInputDate  extends IinputProps{
}
export enum IinputDateType {
    DATE="date",
    TEXT="TEXT"
}
export const InputDate = (props: iInputDate) => {
    const [type , setType] = useState<IinputDateType>(IinputDateType.TEXT)
    const className = props.className ? `input_date ${props.className}` : "input_date"
    const onBlur = (e:any) => {
        console.log('onBlur')
        setType(IinputDateType.TEXT);
        if (props.onBlur){
            props.onBlur(e);
        }
    }
    const onFocus = (e:any) => {
        console.log('onFocus')
        setType(IinputDateType.DATE);
        if (props.onFocus){
            props.onFocus(e);
        }
    }
    return (<Input {...props} className={className} type={type} onBlur={onBlur} onFocus={onFocus} />);
}