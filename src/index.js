import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils-styled-components/global";
import { lightTheme, darkTheme } from "./utils-styled-components/themes";

import { ThemeContext } from "./context/ThemeContext";

// const [darkMode] = useContext(ThemeContext);

ReactDOM.render(
  <ThemeProvider theme={true ? darkTheme : lightTheme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
