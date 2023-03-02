import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      secondary: string;
      third: string;
    };
    font: {
      main: string;
      secondary: string;
    };
  }
}
