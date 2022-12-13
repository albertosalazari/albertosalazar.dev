import { createContext, ReactNode, useEffect, useState } from "react"
import { EN_US, Language, PT_BR } from "@languages"
type CustomLanguageContextProps = {
  language: Language
  languageSwitch(language: any): void
}

type CustomLanguageProviderProps = {
  children: ReactNode
}

export const CustomLanguageContext = createContext<CustomLanguageContextProps>({ language: PT_BR, languageSwitch: () => {} })

export function CustomLanguageProvider({ children }: CustomLanguageProviderProps) {
  const [language, setLanguage] = useState(PT_BR)

  function languageSwitch(language: any) {
    setLanguage(language)
    localStorage.setItem("language", language === PT_BR ? "pt-br" : "en-us")
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
