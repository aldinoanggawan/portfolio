import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Eurostile';
        src: url('./fonts/eurostile.woff');
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
