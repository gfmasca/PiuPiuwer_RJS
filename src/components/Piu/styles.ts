import styled, { css } from "styled-components";

interface DeleteButtonSpanProps {
    yourPiu: boolean;
} 

interface PiuContainerProps {
    piuVisibility: boolean;
}

export const PiuContainer = styled.li<PiuContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #CED4DA;
    padding: 20px;
    transition: opacity .5s;
    position: relative;
    ${ props => !props.piuVisibility &&
            css`
                display: none;
            `        
    }
`

export const ProfilePictureContainer = styled.div`
    display: flex;

    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 40px;
        object-fit: cover;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
    }

    > div > p {
        width: 100%;
    }

   
`

export const Actions = styled.div`
    justify-self: flex-end;
    align-self: flex-end;
    margin-right: 5px;
    display: flex;

    span {
        display: flex;
        align-items: baseline;
        justify-content: center;
        color: #adb5bd94;
        cursor: pointer;
    }

    img {
        width: 26px;
        height: 26px;
        margin: 0 10px 0 7px;
    }

    img:hover {
        opacity: 0.5;
        transition: .3s;
    }
`
export const DeleteButtonSpan = styled.span<DeleteButtonSpanProps>`
    ${ props => props.yourPiu ?
        css`
            display: flex;
            align-items: baseline;
            justify-content: center;
            color: #adb5bd94;
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 10px;
            img {
                width: 16px;
                height: 16px;
                margin: 0 10px 0 7px;
            }

            img:hover {
                opacity: 0.5;
                transition: .3s;
            }
        `  :

        css`
            display: none;
        `
    }
`

export const UsernameTimeContainer = styled.div`
    margin-bottom: 16px;
    h3 {
        font-weight: 650;
        font-size: 14px;
    }
    p {
        font-size: 12px;
        color: grey;
        margin-left: 17px;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`