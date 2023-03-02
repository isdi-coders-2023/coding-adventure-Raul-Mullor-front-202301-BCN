import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";
import TheButton from "./TheButton";

describe("Given a TheButton component", () => {
  describe("When its rendered with the text Sing Up", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const text = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <TheButton text={text} />
        </ThemeProvider>
      );

      const result = screen.getByRole("button", { name: text });

      expect(result).toBeInTheDocument();
    });
  });
});
