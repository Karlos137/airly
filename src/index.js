import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index";
import * as serviceWorker from "./serviceWorker";

//context imports
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalProvider } from "./context/GlobalContext";
import { OptionProvider } from "./context/OptionContext";
import { WeatherProvider } from "./context/WeatherContext";
import { LoadingProvider } from "./context/LoadingContext";
import { OptionListProvider } from "./context/OptionListContext";
import { ImageProvider } from "./context/ImageContext";

ReactDOM.render(
  <ImageProvider>
    <OptionListProvider>
      <LoadingProvider>
        <WeatherProvider>
          <OptionProvider>
            <ThemeProvider>
              <GlobalProvider>
                <App />
              </GlobalProvider>
            </ThemeProvider>
          </OptionProvider>
        </WeatherProvider>
      </LoadingProvider>
    </OptionListProvider>
  </ImageProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
