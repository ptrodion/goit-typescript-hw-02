import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      fontColor: string;
      bkgColor: string;
    };
    spacing: (value: number) => string;
    radius: {
      small: string;
      middle: string;
      large: string;
    };
  }
}
