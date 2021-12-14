// vamos definir os estilos globais 

import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body {
        background: #eee;
    }
    #root { // o rem depende do tamanho do dispositivo (responsividade) 

    }
`
