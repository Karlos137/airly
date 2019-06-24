import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "../pages/LandingPage/index";
import MainPage from "../pages/MainPage/index";

//context providers
import { ThemeProvider } from "../../context/ThemeContext";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={MainPage} />
          <Route
            path="/compare"
            render={props => <MainPage {...props} tab={"compare"} />}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
