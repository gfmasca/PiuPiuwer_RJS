import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #CED4DA;
    padding: 1rem;
    height: 10vh;
    width: 100%;
    img {
        width: 2rem;
        justify-self: flex-start;

        /* GAMBIARRA, NAO CONSIGO FAZER O JUSTIFY-SELF */
        margin-right: 31.5rem;
    }

    h1 {
        display: flex;
        font-weight: normal;
        font-size: 1.5rem;
        color: #264653;
        justify-self: center; 
    }

`

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212529;
    height: 90vh;
`

export const Main = styled.main`
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #343A40;
        width: 60%;
        height: 80%;
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        color: #E9ECEF;
    }
`

export const FieldsetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60%;
    
    fieldset {
        border: none;
        font-size: 1.8rem;
        font-family: Archivo;
        letter-spacing: 2px;
    }

    img {
        width: 2rem;
        align-self: flex-start;
        justify-self: flex-end;
    }
`

export const InputButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    div {
        width: 85%;
    }

    button {
        width: 8.5rem;
        height: 4rem;
        margin-right: 2rem;
        font-size: 1.2rem;
        font-weight: 600;
        border-radius: 2rem;
        color: #212529;
        outline: none;
        border: 1px solid transparent;
        background-color: #ADB5BD;
        cursor: pointer;
        transition: background-color .5s, letter-spacing .5s, border .5s; 
    }

    button:hover {
        letter-spacing: 2px;
        background-color: #6C757D;
        border: 1px solid #CED4DA;
    }
`