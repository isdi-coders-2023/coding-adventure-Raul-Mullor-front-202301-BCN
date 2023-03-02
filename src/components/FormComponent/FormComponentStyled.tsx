import styled from "styled-components";

const FormComponentStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  label {
    display: flex;
    flex-direction: column;
    gap: 9px;
    font-family: ${(props) => props.theme.font.main};
  }

  input {
    border: 1px solid ${(props) => props.theme.color.third};
    background-color: ${(props) => props.theme.color.third};
    display: block;
    width: 325px;
    height: 40px;
    border-radius: 8px;
    padding: 11px;
  }

  @media (min-width: 768px) {
    height: 56px;
    width: 832px;
  }
`;

export default FormComponentStyled;
