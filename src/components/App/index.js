import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../utils-styled-components/global";
import { lightTheme, darkTheme } from "../../utils-styled-components/themes";

import LandingPage from "../pages/LandingPage/index";
import MainPage from "../pages/MainPage/index";

//context imports
import { ThemeContext } from "../../context/ThemeContext";

const App = () => {
  const [darkMode] = useContext(ThemeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/weather-aqi" component={MainPage} />
          <Route
            path="/compare-aqi"
            render={props => <MainPage {...props} tab={"compare"} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
