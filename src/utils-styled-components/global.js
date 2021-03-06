import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Minimal CSS Reset Start */

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Minimal CSS Reset End */

body {
    font-family: 'Roboto', sans-serif;
    color: ${props =>
      props.theme.colors.darkNeutralColor7 || props.theme.colors.neutralColor1};
    background-color: ${props =>
      props.theme.colors.darkBackgroundColor2 ||
      props.theme.colors.backgroundColor4};
}

`;

export default GlobalStyle;
