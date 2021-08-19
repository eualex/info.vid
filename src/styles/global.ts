import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue-700: #3943B7;
    --red-200: #EF476F;
    --yellow-300: #FFD166;
    --green-400: #06D6A0;
    --gray-300: #FCFCFC;
    --gray-800: #1B2432;
    --gray-900: #121420;

    --white:#fff;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: Poppins, sans-serif;
    font-size: 1.6rem;

    background-color: var(--gray-300);
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 56.25%; //9
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 50%; //8
    }
  }

  @media (max-width: 405px) {
    html {
      font-size: 43,75%; //7
    }
  }
`
