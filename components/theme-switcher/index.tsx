import ReactSwitch from "react-switch"
import { useContext } from "react"
import { Container, ThemeIconImage } from "./styles"
import { MyThemeContext } from "../../context/theme"

type ThemeIconProps = {
  src: string
  alt: string
}

function ThemeIcon({ src, alt }: ThemeIconProps) {
  return (
    <Container>
      <ThemeIconImage src={src} alt={alt} />
    </Container>
  )
}

export function ThemeSwitcher() {
  const { theme, handleThemeSwitch } = useContext(MyThemeContext)

  return (
    <ReactSwitch
      onChange={handleThemeSwitch}
      uncheckedIcon={<ThemeIcon src={"sun.png"} alt={"sol do botão de tema"} />}
      checkedIcon={<ThemeIcon src={"moon.png"} alt={"lua do botão de tema"} />}
      checked={theme.theme === "dark"}
      offColor={theme.colors.secondary}
      onColor={theme.colors.secondary}
    />
  )
}
