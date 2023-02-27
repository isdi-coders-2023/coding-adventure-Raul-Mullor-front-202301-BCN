import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const TheButtonStyled = styled.button`
  background-color: #cbcf18;
  color: #1e1e1e;
  width: 323px;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-family: "Saira Stencil One";
  font-size: 20px;

  :disabled {
    opacity: 57%;
  }
  cursor: pointer;

  @media (min-width: 768px) {
    height: 57px;
  }
`;

export default TheButtonStyled;
