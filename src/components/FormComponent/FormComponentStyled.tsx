import styled from "styled-components";

const FormComponentStyled = styled.form`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    gap: 9px;
    font-family: ${(props) => props.theme.font.main};
  }
  input {
    border: 1px solid #fff;
    background-color: #fff;
    display: block;
    width: 325px;
    height: 40px;
    left: 18px;
    right: 18px;
    border-radius: 8px;
  }
`;

export default FormComponentStyled;
