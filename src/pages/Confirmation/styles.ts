import styled from "styled-components";

export const Container = styled.div`
    background: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    height: 100vh;
    p {
        margin-bottom: 1rem;
        padding-bottom: .5rem;
        color: #E9ECEF;
        letter-spacing: 2px;
        font-style: italic;
        border-bottom: .2px solid #E9ECEF;
        width: 60vw;
        font-size: 18px;
        text-align: center;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`