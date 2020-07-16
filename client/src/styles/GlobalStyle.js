import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Eurostile';
        /* src: url('./fonts/eurostile.woff') format('woff'); */
        src: local('Eurostile'), url('eurostile.woff') format('woff');
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-weight: 300;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
