import { cleanup, render, screen } from "@testing-library/react";
import FormComponent from "./FormComponent";
import theme from "../../theme/theme";
import { ThemeProvider } from "styled-components";

describe("Given a FormComponent", () => {
  describe("When its rendered", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <FormComponent />
        </ThemeProvider>
      );
    });

    afterEach(() => {
      cleanup();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign Up";

      const resultButtonText = screen.getByRole("button", { name: buttonText });

      expect(resultButtonText).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Email", () => {
      const imputLabel = "Email";

      const resultImputLabel = screen.getByLabelText(imputLabel);

      expect(resultImputLabel).toBeInTheDocument();
    });

    test("Then it should show second label with the text 'Password", () => {
      const imputLabel = "Password";

      const resultImputLabel = screen.getByLabelText(imputLabel);

      expect(resultImputLabel).toBeInTheDocument();
    });

    test("Then it should show second label with the text 'Image", () => {
      const imputLabel = "Image";

      const resultImputLabel = screen.getByLabelText(imputLabel);

      expect(resultImputLabel).toBeInTheDocument();
    });
  });
});
