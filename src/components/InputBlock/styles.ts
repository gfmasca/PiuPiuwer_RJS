import styled, { css } from "styled-components";

interface InputBlockComponentProps {
    login?: boolean;
    feed?: boolean;
    signIn?: boolean;
}

export const InputBlockComponent = styled.div<InputBlockComponentProps>`
    display: flex;
    /* flex-direction: column; */
    ${ props => 
        props.login &&
        css`
            flex-direction: column;
            align-items: flex-start;
        `
    }
    ${ props => 
        props.feed &&
        css`
            flex-direction: row;
            align-items: center;
        `
    }
    ${ props => 
        props.signIn &&
        css`
            flex-direction: row;
            align-items: center;
            justify-content: start;
            margin-bottom: 1rem;
            width: 100%;
        `
    }
    justify-content: center;

    label {
        ${ props => 
        props.login &&
        css`
            margin-bottom: .7rem;
        `
        }
        ${ props => 
        props.signIn &&
        css`
            margin-right: 2rem;
            width: 80px;
        `
        }
        font-size: 1.2rem;
    }

    input {
        width: 80%;
        height: 2.5rem;
        border-radius: 1.4rem;
        outline: none;
        border: 1px solid transparent;
        padding: 1.3rem;
        font-size: 1rem;
        background: #DEE2E6;
        transition: border .2s, background-color .6s ;
        ${ props => 
        props.signIn &&
        css`
            max-width: 400px;
        `
        }
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