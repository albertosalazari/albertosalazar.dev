import "styled-components"

declare module "styled-components" {
  export interface CustomTheme {
    theme: string
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quartenary: string
      text: string
      background: string
    }
    fonts: {
      text: string
    }
  }
}
