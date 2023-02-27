interface TheButtonProps {
  text: string;
}

const TheButton = ({ text }: TheButtonProps): JSX.Element => {
  return <button>{text}</button>;
};

export default TheButton;
