import React from "react";

import LogoImg from "../../assets/images/LogotipoEscuro.svg";

import {
    DivContainer,
    InputBlock,
    Button,
    ButtonContainer
} from "./styles";

const Login: React.FC = () => {
    return (
        <DivContainer>
            <div id="form-container">

                <form id="login-form">
                    <fieldset> Entrar no PiuPiuwer</fieldset>
            
                    <InputBlock>                       
                        <label htmlFor="username"> PiuName ou Email</label>
                        <input placeholder="Ex: @mandioca123" type="text" id="username"/>
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="password"> Senha</label>
                        <input  type="password" id="password"/>
                    </InputBlock>

                    <ButtonContainer>
                        <Button type="button"> Não tenho uma conta</Button>
                        <Button type="submit"> Entrar</Button>
                    </ButtonContainer>
                </form>
            </div>
            <div id="logo-container">
                <img src={LogoImg} alt="Logotipo"/>
            </div>
        </ DivContainer>    
    )
}

export default Login