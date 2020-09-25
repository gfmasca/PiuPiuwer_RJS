import styled, { css } from "styled-components";

interface InputBlockComponentProps {
    login?: boolean;
    feed?: boolean;
}

export const InputBlockComponent = styled.div<InputBlockComponentProps>`
    display: flex;
    /* flex-direction: column; */
    ${ props => 
        props.login &&
        css`
            flex-direction: column;
        `
    }
    ${ props => 
        props.feed &&
        css`
            flex-direction: row;
        `
    }
    align-items: flex-start;
    justify-content: center;

    label {
        ${ props => 
        props.login &&
        css`
            margin-bottom: 1.2rem;
        `
        }
        font-size: 1.8rem;
    }

    input {
        width: 80%;
        height: 3.4rem;
        border-radius: 1.4rem;
        outline: none;
        border: 1px solid transparent;
        padding: 1.3rem;
        font-size: 1.5rem;
        background: #DEE2E6;
        transition: border .2s, background-color .6s ;
    }

    input:focus {
        border: 1px solid #6C757D;
        background: #ADB5BD;
    }

    
    @media (min-width: 800px) {
        input {
            width: 100%;
        }
    }

`;