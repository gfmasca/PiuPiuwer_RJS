import styled from "styled-components"

export const LinkContainer = styled.div`
    a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        width: 20rem;
        height: 4rem;
        border-radius: 3rem;
        border: none;
        background: #343A40;
        color: #E9ECEF;
        font-size: 1.2rem;
        outline: none;
        align-self: flex-end;
        cursor: pointer;
        transition: background-color .2s;
    }

    a:hover {
        background: #495057;
    }

`