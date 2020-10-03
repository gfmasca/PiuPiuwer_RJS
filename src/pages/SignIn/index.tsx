import React from "react";
import LogoImg from "../../assets/images/LogotipoEscuro.svg"
import InputBlock from "../../components/InputBlock";
import {
    Header,
    ContentContainer,
    Main,
    FieldsetContainer,
    InputButtonContainer,
} from "./styles";

const SignIn: React.FC = () => {
    return (
        <>
            <Header>
                <img src={LogoImg} alt="Logotipo"/>
                <h1> Olha! Mais um Piuwer!</h1>
            </Header>

            <ContentContainer>
                <Main>
                    <form>
                        <FieldsetContainer>
                            <fieldset>Se torne um piuwer de verdade!</fieldset>
                            <img src={LogoImg} alt="Logotipo"/>
                        </FieldsetContainer>    
                        
                        <InputBlock signIn={true} title="PiuName" id="PiuName" type="text" />
                        <InputBlock signIn={true} title="Email" id="Email" type="email"  />
                        <InputBlock signIn={true} title="Senha" id="senha" type="password" />

                        <InputButtonContainer>
                            <div>
                                <InputBlock  title="Data de nascimento" id="nascimento" type="date" signIn={true} />
                                <InputBlock  title="País de origem" id="origem" type="text" signIn={true} />
                            </div>
                            <button type="submit"> Registrar</button>
                        </InputButtonContainer>

                    </form>
                </Main>
            </ContentContainer>
        </>
    )
}
export default SignIn   