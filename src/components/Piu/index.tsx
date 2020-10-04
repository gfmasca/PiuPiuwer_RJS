import React, { useState, useCallback, useEffect } from "react";
import api from "../../services/api";
import { infoPiu } from "../../pages/Feed/index";
import LikeButton from "../../assets/images/like.svg";
import FilledLikeButton from "../../assets/images/FilledLike.svg";
import DeleteButton from "../../assets/images/x-mark.svg";

import {
    PiuContainer,
    ProfilePictureContainer,
    Actions,
    DeleteButtonSpan
} from "./styles";
import { useAuth } from "../../hooks/useAuth";

interface likeStateType {
    likes: number;
    touched: boolean;
}

interface PiuProps extends infoPiu {
    isLiked: boolean;
    searchPiuwers: string;
    pius: Array<infoPiu>;
    setPius(novosPius: Array<infoPiu>): void;
}



const Piu: React.FC<PiuProps> = ({ id ,usuario, likers, texto, searchPiuwers, pius, setPius, isLiked }) => {   

    const { user } = useAuth();
    const [piuVisibility, setPiuVisibility] = useState(true);

    useEffect(() => {
        const expressao = new RegExp(searchPiuwers, 'i');
        setPiuVisibility(expressao.test(usuario.username));
    }, [setPiuVisibility, searchPiuwers, usuario.username]);


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
                    <h3 className="username">{ usuario.username }</h3>
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