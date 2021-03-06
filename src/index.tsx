import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import "assets/styles/global.scss";
import { MUI_THEME } from "assets/theme/setupTheme";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LanguagesProvider from "utils/intl/components/LanguagesProvider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={MUI_THEME}>
        <LanguagesProvider>
          <App />
        </LanguagesProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
