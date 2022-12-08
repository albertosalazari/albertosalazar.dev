import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html,body {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
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
    h1,h2,h3,h4,h5,h6,p {
        font-family: sans-serif;
        color: #000;
    }
`
