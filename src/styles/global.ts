import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: ${props => props.theme.colors.mainBg};
    color: ${props => props.theme.colors.textColor};
  }

  body, input, button, textarea, select {
    font: 400 1rem 'Inter', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  h3, h4 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
` 