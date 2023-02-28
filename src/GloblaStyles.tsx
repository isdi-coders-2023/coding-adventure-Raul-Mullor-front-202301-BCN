import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primaryColor: #1e1e1e;
    --accentColor: #cccf18;
    --primaryFont: "Roboto", sans-serif;
    --displayFont: "Saira Stencil One", sans-serif;
  }
  
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: ${(props) => props.theme.font.secondary};
    background-color: ${(props) => props.theme.color.secondary};
    color:#fff
  }
  h1, h2 {
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a, a:active, a:visited { 
    color: inherit;
    text-decoration: none;
  }
  button {
    font-family: inherit;
    border: none;
    font-size: inherit;
    background-color: transparent;
  };
`;

export default GlobalStyles;
