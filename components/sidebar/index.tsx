import { ThemeSwitcher, Translator } from "@components"
import { useContext } from "react"
import { Navbar, NavbarItem } from "./styles"
import { CustomLanguageContext } from "@context"

export function Sidebar() {
  const { language } = useContext(CustomLanguageContext)

  return (
    <Navbar>
      <NavbarItem href="#profile">{language.SIDEBAR.PROFILE}</NavbarItem>
      <NavbarItem href="#xp">{language.SIDEBAR.XP}</NavbarItem>
      <NavbarItem href="#skills">{language.SIDEBAR.SKILLS}</NavbarItem>
      <NavbarItem href="#contact">{language.SIDEBAR.CONTACT}</NavbarItem>
      <ThemeSwitcher />
      <Translator />
    </Navbar>
  )
}
