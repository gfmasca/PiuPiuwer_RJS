import React from "react";
import LogoImg from "../../assets/images/logotipo.svg";
import PenImg from "../../assets/images/pen.svg";
import InputBlock from "../../components/InputBlock/InputBlock";

import {
    Menu,
    Header,
    NovoPiu,
    Aligner,
    CampoNovoPiu,
    FeedDiv,
    Container,
    FormNovoPiu
} from "./styles";

const Feed: React.FC = () => {
    return(
        <Container>

            <Menu>
                <img src={LogoImg} alt="Logotipo"/>
                <ul>                    
                    <li><a href=""> Meu perfil </a></li>
                    <li><a href=""> Notificações</a></li>
                    <li><a href=""> Piu's salvos</a></li>
                    <li><a href=""> Configurações</a></li>
                </ul>
            </Menu>
            <Aligner>
                <Header>
                    <NovoPiu>
                        <h2> Dê um piu!</h2>
                        <button id="adicionar-piu"><img src={PenImg} alt="botão para dar piu" /></button>
                    </NovoPiu>
                    <InputBlock title=" Pesquisar Piuwers" id="input-para-pesquisar-pius" placeholder="Digite o Piu procurado" type="text" feed={true} />
                </Header>

                <CampoNovoPiu visible={false} >
                    <FormNovoPiu>
                        <div className="alinhamento">
                            <label htmlFor="mensagem-novo-piu">Digite a mensagem do Piu: </label>
                        </div>
                        <div className="alinhamento-text-botao">
                            <textarea name="mensagem" id="mensagem-novo-piu" placeholder="Digite a sua mensagem..."></textarea>
                            <div id="alinhamento-botao-contador">
                                <p id="contador">0</p>
                                <p id="tamanho-maximo-caracteres">/140</p>
                                <button disabled id="postar-piu">Postar Piu</button>
                            </div>
                        </div>
                        <p id="fechar-aba">x</p>
                    </FormNovoPiu>
                </CampoNovoPiu>
                <FeedDiv>
                    <ul id="lista-de-pius">
                        <li className="piu piu-exemplo">
                            <div className="suporte">
                                <img className="profile-picture" src="img/perfil.jpg" alt="foto de perfil" />
                                <div className="texto-do-piu">
                                    <h3 className="username">@masca</h3>
                                    <p>Micróbio do krl</p>
                                </div>
                            </div>
                            <div className="actions">
                                <span className="action inativo"><p>0</p>
                                    <img className="icone-action botao-like" src="img/like.svg" alt="botão de like" />
                                </span>
                                <span className="action inativo"><p>0</p>
                                    <img className="icone-action botao-save" src="img/bookmark.svg" alt="botão para salvar o piu" />
                                </span>
                                <span className="action inativo">
                                    <img className="icone-action botao-save" src="img/x-mark.svg" alt="botão para salvar o piu" />
                                </span>
                            </div>
                        </li>
                    </ul>
                </FeedDiv>

            </Aligner>

        </Container>
    );
}

export default Feed;