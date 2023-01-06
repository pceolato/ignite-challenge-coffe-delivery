import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CoffeContextProvider } from "./contexts/CoffeContext"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <Router />
        </CoffeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
