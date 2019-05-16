import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#29af46',
  grey: '#575d69',
  greyDark: '#2b3037',
  greyDark2: '#31373A',
  greyLight: '#f8f9fd',
  white: '#fff',
  red: '#dc3545',
};

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${colors.primary};
    --color-grey: ${colors.grey};
    --color-grey-dark-1: ${colors.greyDark};
    --color-grey-dark-2: ${colors.greyDark2};
    --color-grey-light: ${colors.greyLight};
    --color-white: ${colors.white};
    --color-red: ${colors.red};
    --breakpoint-small: 37.5em;
    --breakpoint-medium: 62em;
    --breakpoint-large: 75em;
    --box-shadow: 0 0 3px 0 rgba(0,0,0,0.3);
  }
  * {
    margin:0;
    padding:0;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    line-height: 1.4;
    min-height: 100vh;
    background-color: var(--color-grey-light);
    color: var(--color-grey-dark-1);
  }
`;

export default GlobalStyle;
