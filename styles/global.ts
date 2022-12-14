import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
    html,body {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
        background-color: ${(props) => props.theme.colors.background};
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    h1,h2,h3,h4,h5,h6,p,a {
        color: ${(props) => props.theme.colors.text};
    }
    #__next {
        padding-top: 70px;
    }
`
