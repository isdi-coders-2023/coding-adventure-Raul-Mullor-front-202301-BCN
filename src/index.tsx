import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TheButton from "./components/TheButton/TheButton";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <TheButton text={"Hola que tal"} />
  </React.StrictMode>
);
