import React, { ButtonHTMLAttributes } from "react";
import { BeatLoader } from 'react-spinners';

import {
    ButtonDefaultStyle,
    beatLoaderStyle
} from "./styles";

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading: boolean;
    label: string;
}



const ButtonDefault: React.FC<ButtonDefaultProps> = ({ loading, label, ...rest }) => {
    return (
        <ButtonDefaultStyle {...rest} >
            <BeatLoader  css={beatLoaderStyle.toString()} size="10" loading={loading} />
            { label }
        </ButtonDefaultStyle>
    )
}
export default ButtonDefault