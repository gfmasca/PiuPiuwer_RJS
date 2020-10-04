import React, { FormEvent, useCallback, useEffect, useState } from "react";
import LogoImg from "../../assets/images/LogotipoEscuro.svg";
import ButtonDefault from "../../components/ButtonDefault";
import DefaultLink from "../../components/DefaultLink";
import InputBlock from "../../components/InputBlock";
import { useAuth } from "../../hooks/useAuth";

import {
    DivContainer,
    ButtonContainer
} from "./styles";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { login, error, loading } = useAuth();

    const handleLogin = useCallback((e: FormEvent) => {
        e.preventDefault();

        login({ username, password });

    }, [login, password, username]);

    useEffect(() => {
        error && (username === '' || password === '' ? setErrorMessage('Os campos devem estar preenchidos') :
                                                        setErrorMessage('Usuario ou senha inválidos.'));
    }, [error, username, password]);

    return (
        <DivContainer>
            <div id="form-container">
                <form onSubmit={ handleLogin }>
                    <fieldset> Entrar no PiuPiuwer</fieldset>

                    <InputBlock onChange={(e) => { setUsername(e.target.value) }} title="PiuName ou Email" id="username" placeholder="Ex: @mandioca123" type="text" login={true}/>

                    <InputBlock onChange={(e) => { setPassword(e.target.value) }} title=" Senha" id="password" type="password" login={true}/>
                    
                    <ButtonContainer>
                        <DefaultLink label="Não tenho uma conta" destiny="/signin" />                        
                        <ButtonDefault type="submit" label="Entrar" loading={loading} />
                    </ButtonContainer>
                </form>
                <p>{ errorMessage }</p>
            </div>
            <div id="logo-container">
                <img src={LogoImg} alt="Logotipo"/>
            </div>
        </DivContainer>
    )
}

export default Login