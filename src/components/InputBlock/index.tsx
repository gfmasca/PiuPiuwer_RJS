import React, { InputHTMLAttributes } from "react";

import {
    InputBlockComponent
} from "./styles";

interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement>{
    title: string;
    id: string;
    login?: boolean;
    feed?: boolean;
    signIn?: boolean;
}

const InputBlock: React.FC<InputBlockProps> = ({ title, id, login=false, feed=false, signIn=false, ...rest}) => {
    return (
        <InputBlockComponent login={login} feed={feed} signIn={signIn} >                       
            <label htmlFor={id}> {title}</label>
            <input id={id} {...rest}/>
        </InputBlockComponent>
    )
}
export default InputBlock