import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.palette.gray[900]};
  }
`