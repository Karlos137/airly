import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "../pages/LandingPage/index";
import MainPage from "../pages/MainPage/index";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={MainPage} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
