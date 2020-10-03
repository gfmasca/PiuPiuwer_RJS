import React from "react";
import DefaultLink from "../../components/DefaultLink";
import { useAuth } from "../../hooks/useAuth";

import {
    Container,
    ButtonsContainer,
} from "./styles";

const Confirmation: React.FC = () => {
    const { logout } = useAuth();
    return (
        <Container>
            <p>Tem certeza ?</p>
            <ButtonsContainer>
                <DefaultLink label="Sim" destiny="/login" onClick={ logout } />
                <DefaultLink label="Não" destiny="/feed" />
            </ButtonsContainer>
        </Container>
    )
}
export default Confirmation