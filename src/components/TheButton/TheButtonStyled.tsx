import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const TheButtonStyled = styled.button`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.secondary};

  width: 323px;
  height: 40px;

  border-radius: 10px;
  border: none;

  font-family: ${(props) => props.theme.font.secondary};
  font-size: 20px;

  cursor: pointer;
  :disabled {
    opacity: 57%;
  }

  @media (min-width: 768px) {
    height: 57px;
  }
`;

export default TheButtonStyled;
