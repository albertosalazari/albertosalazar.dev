import type { AppProps } from "next/app"
import { GlobalStyle } from "../styles/global"
import { Sidebar } from "../components/sidebar"
import { MyThemeProvider } from "../context/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Sidebar />
      </MyThemeProvider>
    </>
  )
}
