import type { AppProps } from "next/app"
import { GlobalStyle } from "../styles/global"
import { Sidebar } from "@components"
import { CustomLanguageProvider, CustomThemeProvider } from "@context"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomLanguageProvider>
        <CustomThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
          <Sidebar />
        </CustomThemeProvider>
      </CustomLanguageProvider>
    </>
  )
}
