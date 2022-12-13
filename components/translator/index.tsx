import { LANGUAGES } from "@constants"
import { useContext, useState } from "react"
import { CustomLanguageContext } from "@context"
import { Container, List, Select } from "./styles"

type TranslatorLanguagesListProps = {
  visibility: boolean
  handleIsVisibleMenu(): void
}

type TranslatorLanguagesListItemProps = {
  icon: any
  language: any
  handleIsVisibleMenu(): void
}

export function Translator() {
  const [isVisible, setIsVisible] = useState(false)

  function handleIsVisibleMenu() {
    setIsVisible(!isVisible)
  }

  return (
    <Container>
      <Select onClick={handleIsVisibleMenu}>
        <img src="translate.png" alt="botão de tradutor" />
      </Select>
      <TranslatorLanguagesList visibility={isVisible} handleIsVisibleMenu={handleIsVisibleMenu} />
    </Container>
  )
}

export function TranslatorLanguagesList({ visibility, handleIsVisibleMenu }: TranslatorLanguagesListProps) {
  const listItens = LANGUAGES.map((language, index) => {
    return <TranslatorLanguagesListItem key={index} language={language.language} icon={language.icon} handleIsVisibleMenu={handleIsVisibleMenu} />
  })

  return <List style={{ display: visibility ? "flex" : "none" }}>{listItens}</List>
}

export function TranslatorLanguagesListItem({ language, icon, handleIsVisibleMenu }: TranslatorLanguagesListItemProps) {
  const { languageSwitch } = useContext(CustomLanguageContext)

  function handleChangeLanguage() {
    languageSwitch(language)
    handleIsVisibleMenu()
  }

  return (
    <li>
      <button onClick={handleChangeLanguage}>{icon}</button>
    </li>
  )
}
