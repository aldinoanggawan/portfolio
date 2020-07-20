import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
