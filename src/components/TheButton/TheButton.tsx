import TheButtonStyled from "./TheButtonStyled";

interface TheButtonProps {
  text: string;
}

const TheButton = ({ text }: TheButtonProps): JSX.Element => {
  return <TheButtonStyled> {text} </TheButtonStyled>;
};

export default TheButton;
