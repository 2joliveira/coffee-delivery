import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CoffeeShoProvider } from "./contexts/CoffeeShopContext";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root'); 

export function App() {
  return (
    <CoffeeShoProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </CoffeeShoProvider>
  );
}
