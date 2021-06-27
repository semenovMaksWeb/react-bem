import "./input.css"
import React, {InputHTMLAttributes} from "react"
import {InputErrors} from "./input__errros/input__errros";
export  interface IinputProps extends InputHTMLAttributes<any>{
    // event: Function,
    // errors: string[]
    // name: string,
    classNameBox?: string,
}
export  function PropsInputSet(props:IinputProps){
    return {
        ...props,
        errors: null,
        event: null,
        classBox: null,
    }
}

export  function Input(props:IinputProps){
    const propsInputSet = PropsInputSet(props);
    const className = props.className ? `input ${props.className}` : "input"
    const classNameBox = props.classNameBox ? `input__box ${props.classNameBox}` : "input__box"
    const onChange = (e:any) => {
        if (props.onChange){
            props.onChange(e.target.value)
        }
    }
    return(
        <div className={classNameBox}>
            <input
                {...propsInputSet}
                className={className}
                onChange={onChange}
            />
            {/*<InputErrors errors={props.errors} />*/}
        </div>
    )
}