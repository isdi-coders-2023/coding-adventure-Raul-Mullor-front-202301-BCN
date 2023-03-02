import React from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import TheButton from "./components/TheButton/TheButton";

const App = (): JSX.Element => {
  return (
    <>
      <FormComponent />
      <TheButton text={"Sign up"} />
    </>
  );
};

export default App;
