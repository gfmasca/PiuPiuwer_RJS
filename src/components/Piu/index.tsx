import React, { useState, useCallback, useEffect, useMemo } from "react";
import api from "../../services/api";
import { InfoPiu } from "../../pages/Feed/index";
import LikeButton from "../../assets/images/like.svg";
import FilledLikeButton from "../../assets/images/FilledLike.svg";
import DeleteButton from "../../assets/images/x-mark.svg";

import {
    PiuContainer,
    ProfilePictureContainer,
    Actions,
    DeleteButtonSpan,
    UsernameTimeContainer
} from "./styles";
import { useAuth } from "../../hooks/useAuth";

interface likeStateType {
    likes: number;
    touched: boolean;
}

interface PiuProps extends InfoPiu {
    isLiked: boolean;
    searchPiuwers: string;
    pius: Array<InfoPiu>;
    setPius(novosPius: Array<InfoPiu>): void;
}



const Piu: React.FC<PiuProps> = ({ id ,usuario, likers, texto, searchPiuwers, pius, setPius, isLiked, horario }) => {   

    const { user } = useAuth();
    const [piuVisibility, setPiuVisibility] = useState(true);

    useEffect(() => {
        const expressao = new RegExp(searchPiuwers, 'i');
        setPiuVisibility(expressao.test(usuario.username));
    }, [setPiuVisibility, searchPiuwers, usuario.username]);

    const relativeTime = useMemo<string>(() => {
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;

        const piuTime = Date.parse(horario);
        const currentTime = Date.parse(Date());

        const elapsed = currentTime - piuTime;
    
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' s';
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' min';
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' h';
        }
    
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' d';
        }
    
        else if (elapsed < msPerYear) {
            
            return Math.round(elapsed/msPerMonth) + (
                Math.round(elapsed/msPerMonth) !== 1
                    ? ' meses'
                    : ' mês'
            );
        }
    
        else {
            return Math.round(elapsed/msPerYear) + (
                Math.round(elapsed/msPerYear) !== 1
                    ? ' anos'
                    : ' ano'
            );
        }
    }, [horario])

    const handleDelete = useCallback( async () => {
        
        setPiuVisibility(false);

        const response = await api.delete(`/pius/${id}/`);
        console.log(response);
    }, [ id ] )

    const handleLike = useCallback(async () => {
        // criar [] <- mudando os pius(estado) atualizando ele do jeito que eu quero, dps setando os proprio piu como esse cara
        

        const piusAtualizados = pius.map((piu) => {

            if ( !isLiked && piu.id === id) {
                return {
                    ...piu,
                    likers: [
                        ...piu.likers,
                        user
                    ]
                }
            } else if (isLiked && piu.id === id ) {
                return {
                    ...piu, 
                    likers: piu.likers.filter(liker => liker.id !== user.id)
                }
            } else {
                return piu;
            }
            
        });

        setPius( piusAtualizados );

        await api.post('pius/dar-like/', {
            usuario: user.id,
            piu: id,
        } );
    }, [ id, pius, setPius, isLiked, user ]);

    return (
        <PiuContainer piuVisibility={ piuVisibility } >
            <ProfilePictureContainer>
                <img src={ usuario.foto } alt="foto de perfil" />
                <div>
                    <UsernameTimeContainer>
                        <h3 className="username">{ usuario.username }</h3>
                        <p>{ relativeTime }</p>
                    </UsernameTimeContainer>
                    <p>{ texto }</p>
                </div>
            </ProfilePictureContainer>
            <Actions>
                <span onClick={ handleLike } ><p>{ likers.length }</p>
                {/* if liked src = x else scr = y */}
                    <img src={ isLiked ? FilledLikeButton : LikeButton } alt="botão de like" />
                </span>
            </Actions>
            
            <DeleteButtonSpan onClick={ handleDelete } yourPiu={ usuario.id === user.id }>
                <img src={DeleteButton} alt="botão para salvar o piu" />
            </DeleteButtonSpan>
        </PiuContainer>
    )
}
export default Piu