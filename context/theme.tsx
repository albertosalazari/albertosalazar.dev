import { createContext, ReactNode, useEffect, useState } from "react"
import { lightTheme, darkTheme } from "@themes"
import { DefaultTheme, ThemeProvider } from "styled-components"

type CustomThemeContextProps = {
  theme: DefaultTheme
  themeSwitch(): void
}

type CustomThemeProviderProps = {
  children: ReactNode
}

export const CustomThemeContext = createContext<CustomThemeContextProps>({ theme: lightTheme, themeSwitch: () => {} })

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [theme, setTheme] = useState(lightTheme)

  function themeSwitch() {
    setTheme(theme.theme === "light" ? darkTheme : lightTheme)
    localStorage.setItem("theme", theme.theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    if (window) {
      const getTheme = localStorage.getItem("theme")

      if (getTheme) {
        setTheme(getTheme === "light" ? lightTheme : darkTheme)
      }
    }
  }, [])

  return (
    <CustomThemeContext.Provider value={{ theme: theme, themeSwitch: themeSwitch }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}
