import React, { FormEvent, useCallback, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Piu from "../../components/Piu";
import api from "../../services/api";
import { useAuth, User } from "../../hooks/useAuth";
import { BounceLoader } from "react-spinners";

import LogoImg from "../../assets/images/logotipo.svg";
import PenImg from "../../assets/images/pen.svg";
import InputBlock from "../../components/InputBlock";


import {
    Menu,
    Header,
    NovoPiu,
    Aligner,
    CampoNovoPiu,
    FeedDiv,
    Container,
    FormNovoPiu,
    LabelContainer,
    TextButtonContainer,
    CounterContainer,
    Button,
    NewPiuInput,
    LoaderStyle
} from "./styles";



export interface InfoPiu {
    id: number;
    usuario: User;
    likers: Array<User>;
    favoritado_por: Array<User>;
    texto: string;
    horario: string;
}

const Feed: React.FC = () => {
    const { user } = useAuth();
    
    const [pius, setPius] = useState<Array<InfoPiu>>([] as Array<InfoPiu>);
    const [piuLetterCounter, setPiuLetterCounter] = useState(0);
    const [piuContent, setPiuContent] = useState('');
    const [buttonState, setButtonState] = useState(false);
    const [searchPiuwers, setSearchPiuwers] = useState('');

    const likedPiusIds = useMemo(() => {
        const likedPius = pius.filter(piu => {
            const likersIds = piu.likers.map(user => user.id);
            return likersIds.includes(user.id);
        })
        return likedPius.map(piu => piu.id);
    }, [pius, user]);

    const [visibilityPiuBox, setVisibilityPiuBox] = useState(false);  
    

    const handlePostPiu = useCallback( async (e: FormEvent) => {
        e.preventDefault();

        const piuData ={
            usuario: user.id,
            texto: piuContent
        }
        setPiuContent('');
        
        const response = await api.post('/pius/', piuData);
        const novoPiu = response.data;
        setPius([ novoPiu, ...pius ]);
        setVisibilityPiuBox(false);


    }, [ pius, setPius , user, piuContent ])

    const handleVisibility = useCallback(() => {
        setVisibilityPiuBox(!visibilityPiuBox);
    }, [visibilityPiuBox, setVisibilityPiuBox]);

    useEffect(() => {
        setButtonState(piuLetterCounter === 0 || piuLetterCounter >= 140);
    }, [piuLetterCounter])

    // carregando os pius da api
    const [loading, setLoading] = useState(true);

    useEffect(() => {   
        async function carregarPius() {
            setLoading(true);
            try{
                const response = await api.get('/pius/');
                
                setPius(response.data);
                setLoading(false);
            }
            catch {
                alert("Erro no carregamento dos pius, tente novamente mais tarde.");
            }
        }
        carregarPius();
    }, []);

    return(
        <Container>

            <Menu>
                <img src={LogoImg} alt="Logotipo"/>
                <ul>         
                    <li><a href="#"> Meu perfil </a></li>
                    <li><a href="#"> Notificações</a></li>
                    <li><Link to="/confirmation" > LogOut</Link></li>
                </ul>
            </Menu>
            <Aligner>
                <Header>
                    <NovoPiu>
                        <h2> Dê um piu!</h2>
                        <button onClick={handleVisibility} id="adicionar-piu"><img src={PenImg} alt="botão para dar piu" /></button>
                    </NovoPiu>
                    <InputBlock 
                        onChange={ (e) => {setSearchPiuwers(e.target.value)} }
                        title=" Pesquisar Piuwers"
                        id="input-para-pesquisar-pius"
                        placeholder="Digite o Piu procurado" 
                        type="text" 
                        feed={true}
                    />
                </Header>

                <CampoNovoPiu visible={visibilityPiuBox}>
                    <FormNovoPiu onSubmit={ handlePostPiu } >
                        <LabelContainer>
                            <label htmlFor="mensagem-novo-piu"> Digite a mensagem do Piu: </label>
                        </LabelContainer>
                        <TextButtonContainer>
                            <NewPiuInput 
                                isDisabled = { buttonState }
                                onChange={(e) => {
                                    setPiuLetterCounter(e.target.value.length);
                                    setPiuContent(e.target.value);
                                }}
                                name="mensagem"
                                value={ piuContent }
                                placeholder="Digite a sua mensagem..."
                            ></NewPiuInput>
                            <CounterContainer>
                                <p id="contador">{ piuLetterCounter }</p>
                                <p id="tamanho-maximo-caracteres">/140</p>
                                <Button disabled={ buttonState } isDisabled={ buttonState } type="submit" >Postar Piu</Button>
                            </CounterContainer>
                        </TextButtonContainer>
                        <p id="fechar-aba" onClick={handleVisibility} >x</p>
                    </FormNovoPiu>
                </CampoNovoPiu>
                <FeedDiv>
                    <ul>
                        <BounceLoader css={LoaderStyle.toString()} color="#CED4DA" loading={ loading } />
                        { pius.map( piu => {
                            return (
                                <Piu 
                                    pius={ pius }
                                    setPius={ setPius }
                                    isLiked={ likedPiusIds.includes(piu.id) }
                                    searchPiuwers={ searchPiuwers }
                                    key={piu.id} id={ piu.id } 
                                    likers={piu.likers} 
                                    favoritado_por={piu.favoritado_por} 
                                    usuario={piu.usuario} 
                                    texto={piu.texto} 
                                    horario={piu.horario}
                                />
                            );
                        } ) }
                    </ul>
                </FeedDiv>

            </Aligner>

        </Container>
    );
}

export default Feed;