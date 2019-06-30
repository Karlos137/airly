import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index";
import * as serviceWorker from "./serviceWorker";

//context imports
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalProvider } from "./context/GlobalContext";
import { OptionProvider } from "./context/OptionContext";
import { WeatherProvider } from "./context/WeatherContext";

// const [darkMode] = useContext(ThemeContext);

ReactDOM.render(
  <WeatherProvider>
    <OptionProvider>
      <ThemeProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </ThemeProvider>
    </OptionProvider>
  </WeatherProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
