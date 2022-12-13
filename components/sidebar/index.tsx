import { ThemeSwitcher, Translator } from "@components"
import { useContext } from "react"
import { Navbar } from "./styles"
import { CustomLanguageContext } from "@context"

export function Sidebar() {
  const { language } = useContext(CustomLanguageContext)

  return (
    <Navbar>
      <p>{language.SIDEBAR.PROFILE}</p>
      <p>{language.SIDEBAR.XP}</p>
      <p>{language.SIDEBAR.SKILLS}</p>
      <p>{language.SIDEBAR.CONTACT}</p>
      <ThemeSwitcher />
      <Translator />
    </Navbar>
  )
}
