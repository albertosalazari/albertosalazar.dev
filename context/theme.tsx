import { createContext, ReactNode, useEffect, useState } from "react"
import { lightTheme, darkTheme } from "@themes"
import { CustomTheme, ThemeProvider } from "styled-components"

type MyThemeContextProps = {
  theme: CustomTheme
  handleThemeSwitch(): void
}

type MyThemeProviderProps = {
  children: ReactNode
}

export const MyThemeContext = createContext<MyThemeContextProps>({ theme: lightTheme, handleThemeSwitch: () => {} })

export function MyThemeProvider({ children }: MyThemeProviderProps) {
  const [theme, setTheme] = useState(lightTheme)

  function handleThemeSwitch() {
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
    <MyThemeContext.Provider value={{ theme: theme, handleThemeSwitch: handleThemeSwitch }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  )
}
