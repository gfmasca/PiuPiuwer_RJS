import React from "react";

import LogoImg from "../../assets/images/LogotipoEscuro.svg";
import InputBlock from "../../components/InputBlock/InputBlock";

import {
    DivContainer,
    Button,
    ButtonContainer
} from "./styles";

const Login: React.FC = () => {
    return (
        <DivContainer>
            <div id="form-container">

                <form id="login-form">
                    <fieldset> Entrar no PiuPiuwer</fieldset>
            
                    <InputBlock title="PiuName ou Email" id="username" placeholder="Ex: @mandioca123" type="text" login={true}/>

                    <InputBlock title=" Senha" id="password" type="password" login={true}/>
                    
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