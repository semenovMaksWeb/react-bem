import "components/input/input__errros/input__errros.scss"
import  React from "react"
//{SFC}
export  function  InputErrors(props: {errors:string[]}){
    return(
        <div className="input__errors">
            {props.errors.map((e, index)=>(
                <div className='input__error' key={index}>{e}</div>
                )
            )}
        </div>

    )
}