import { Navbar } from "./styles"
import { ThemeSwitcher } from "../theme-switcher"

export function Sidebar() {
  return (
    <Navbar>
      <p>Perfil</p>
      <p>Experiências</p>
      <p>Skills</p>
      <p>Contato</p>
      <ThemeSwitcher />
    </Navbar>
  )
}
