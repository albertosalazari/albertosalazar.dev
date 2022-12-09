import type { AppProps } from "next/app"
import { GlobalStyle } from "../styles/global"
import { Sidebar } from "../components/sidebar"
import { CustomThemeProvider } from "../context/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Sidebar />
      </CustomThemeProvider>
    </>
  )
}
