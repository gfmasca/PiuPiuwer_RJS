import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

import {
    LinkContainer
} from "./styles";

interface DefaultLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
    destiny: string;
}

const DefaultLink: React.FC<DefaultLinkProps> = ({ label, destiny, ...rest }) => {
    return (
        <LinkContainer>
        
            <Link to={ destiny } { ...rest } >{ label }</Link>

        </LinkContainer>
    )
}
export default DefaultLink