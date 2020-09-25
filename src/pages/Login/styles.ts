import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100vw;
    height: 100vh;

    div#form-container {
        height: 90vh;
        background: #212529;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div#form-container form {
        background: #6C757D;
        width: 75%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #E9ECEF;
        font-size: 1.5rem;
        padding: 2rem;
        border-radius: 2rem;
    }

    div#form-container form fieldset{
        border: none;
        font-size: 2.5rem;
        border-bottom: solid #343A40 1px;
    }

    div#logo-container {
        height: 10vh;
        background: #E9ECEF;
        padding: 1rem;
    }

    div#logo-container img {
        width: 4rem; 
    }

    @media (min-width: 800px) {
        flex-direction: row;
        
        div#form-container {
            width: 65vw;
            height: 100vh;
        }

        div#form-container form {
            height: 60%;
        }

        div#logo-container {
            width: 35vw;
            height: 100vh;
            overflow: hidden;
        }

        div#logo-container img {
            height: 100%;
            width: 140%;
            margin-left: -15rem;
        }
    }


`;

export const ButtonContainer = styled.div`
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: flex-end;
        height: 5rem;
    }
    
    
`

export const Button = styled.button`
    width: 20rem;
    height: 4rem;
    border-radius: 3rem;
    border: none;
    background: #343A40;
    color: #E9ECEF;
    font-size: 1.5rem;
    outline: none;
    align-self: flex-end;
    cursor: pointer;
    transition: background-color .2s;
    &:hover {
        background: #495057;
    }

    @media (min-width: 800px) {
        &:first-child {
            margin-right: 2rem;
        }
    }

`;