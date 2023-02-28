import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";
import TheButton from "./TheButton";

describe("Given a TheButton component", () => {
  describe("When its rendered", () => {
    test("Then it should show a button with the text 'eee you'", () => {
      const text = "eee you";

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
