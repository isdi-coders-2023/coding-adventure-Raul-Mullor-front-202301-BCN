import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: ${(props) => props.theme.font.secondary};
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.secondary};;
    padding: 10px;
  }

  h1, h2 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  ul, ol, li {
    list-style: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  a, a:active, a:visited { 
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  };
`;

export default GlobalStyles;
