import { createContext, ReactNode, useEffect, useState } from "react"
import { EN_US, Language, PT_BR } from "@languages"
type CustomLanguageContextProps = {
  language: Language
  languageSwitch(): void
}

type CustomLanguageProviderProps = {
  children: ReactNode
}

export const CustomLanguageContext = createContext<CustomLanguageContextProps>({ language: PT_BR, languageSwitch: () => {} })

export function CustomLanguageProvider({ children }: CustomLanguageProviderProps) {
  const [language, setLanguage] = useState(PT_BR)

  function languageSwitch() {
    setLanguage(language.language === "pt-br" ? EN_US : PT_BR)
    localStorage.setItem("language", language.language === "pt-br" ? "en-us" : "pt-br")
  }

  useEffect(() => {
    if (window) {
      const getLanguage = localStorage.getItem("language")

      if (getLanguage) {
        setLanguage(getLanguage === "pt-br" ? PT_BR : EN_US)
      }
    }
  }, [])

  return <CustomLanguageContext.Provider value={{ language: language, languageSwitch: languageSwitch }}>{children}</CustomLanguageContext.Provider>
}
