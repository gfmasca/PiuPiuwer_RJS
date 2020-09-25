import React, { InputHTMLAttributes } from "react";

import {
    InputBlockComponent
} from "./styles";

interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement>{
    title: string;
    id: string;
    login?: boolean;
    feed?: boolean;
}

const InputBlock: React.FC<InputBlockProps> = ({ title, id, login=false, feed=false, ...rest}) => {
    return (
        <InputBlockComponent login={login} feed={feed} >                       
            <label htmlFor={id}> {title}</label>
            <input id={id} {...rest}/>
        </InputBlockComponent>
    )
}
export default InputBlock