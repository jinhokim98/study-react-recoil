import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import theme from './Theme'

const GlobalStyle = createGlobalStyle`
    ${reset};

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    body {
        margin: 0 ${theme.margin.margin_browser};
        background-color: #2C2C33;
    }
`
export default GlobalStyle
