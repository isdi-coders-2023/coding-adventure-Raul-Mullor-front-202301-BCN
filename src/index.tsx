import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import TheButton from "./components/TheButton/TheButton";
import GlobalStyles from "./GloblaStyles";
import theme from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
      <TheButton text={"Sign up"} />
    </ThemeProvider>
  </React.StrictMode>
);
