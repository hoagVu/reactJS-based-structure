import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import "assets/styles/global.scss";
import { MUI_THEME } from "assets/theme/setupTheme";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LanguagesProvider from "utils/intl/components/LanguagesProvider";
import { Provider } from "react-redux";
import { store } from "utils/redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={MUI_THEME}>
          <LanguagesProvider>
            <App />
          </LanguagesProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
