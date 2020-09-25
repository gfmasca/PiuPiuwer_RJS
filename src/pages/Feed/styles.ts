import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: 100vh;
    min-height: 100vh;
    /* nao sei se isso vai dar problema */
    overflow: hidden;
`

export const Menu = styled.nav`
    /* fixando ela no canto da janela */
    position: fixed;
    left: 0;
    top: 0;

    /* ajustando o ul */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 100vh;
    background: #343A40;
    border-right: 3px solid #6C757D;
    img {
        width: 44.89px;
        height: 62.4px;
        position: absolute;
        left: 10px;
        top: 20px;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        /* ----------------------------- */
        list-style-type: none;
        width: 80%;
        height: 77.6%;
    }
    li {
        width: 100%;
        height: 9%;
        border-radius: 15px;
        background: #495057;
        font-size: 1em;
        transition: background  .5s, border .5s, letter-spacing .5s;
        border: 1px solid transparent;
    }
    li:hover {
        background: #6C757D;
        border: 1px solid #ADB5BD;
        letter-spacing: 1.2px;
    }
    a {
        /* centralizando o texto */
        display: flex;
        align-items: center;
        justify-content: center;
        /* ---------------------------------- */
        /* estilização */
        text-decoration: none;
        color: #F8F9FA;
        width: 100%;
        height: 100%;
    }
`

export const Aligner = styled.div`
    width: 80vw;
    margin-left: 20vw;
    height: 100vh;
    background: #212529;
    color: #F8F9FA;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 13%;
    border-bottom: 2px solid #CED4DA;
    padding: 1% 5%;
`

export const NovoPiu = styled.div`
    display: flex;
    align-items: center;
    padding-right: 5%;
    margin-right: 5%;
    border-right: 1px solid #F8F9FA;
    h2 {
        font-weight: normal;
        margin-right: 10px;
        font-size: 1.5em;
    }

    button {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        background: #495057;
        border: 2px solid transparent;
        transition: background .5s, border .5s;
    }

    button:hover {
        background:#CED4DA;
        border: 2px solid #F8F9FA;  
    }

    img {
        width: 40px;
        height: 40px;
    }
`

export const PesquisarPiu = styled.div`

`

interface CampoNovoPiuProps {
    visible: boolean;
}

export const CampoNovoPiu = styled.div<CampoNovoPiuProps>`
    height: 0rem;
    display: flex;
    flex-direction: column;
    background: #6c757d9d;
    position: relative;
    transition: height 1s cubic-bezier(.31,.39,.21,1.95);
    overflow: hidden;
    ${ props => props.visible && 
        css`
            height: 200px !important;
            border-bottom: 2px solid #CED4DA;
        `
    }

`

export const FormNovoPiu = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 15px 0 15px 30px;
`

export const FeedDiv = styled.main`

`