import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <h1>App.js</h1>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
