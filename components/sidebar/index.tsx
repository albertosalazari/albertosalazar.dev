import { ThemeSwitcher, Translator } from "@components"
import { Navbar } from "./styles"

export function Sidebar() {
  return (
    <Navbar>
      <p>Perfil</p>
      <p>Experiências</p>
      <p>Habilidades</p>
      <p>Contato</p>
      <ThemeSwitcher />
      <Translator />
    </Navbar>
  )
}
