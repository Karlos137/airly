import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "../pages/LandingPage/index";
import Header from "../Header/index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/" component={Header} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
