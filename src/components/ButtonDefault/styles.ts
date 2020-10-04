import styled, { css } from "styled-components";

export const ButtonDefaultStyle = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 4rem;
    border-radius: 3rem;
    border: none;
    background: #343A40;
    color: #E9ECEF;
    font-size: 1.2rem;
    outline: none;
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
export const beatLoaderStyle = css`
    position: absolute; 
    left: 40px;
`

