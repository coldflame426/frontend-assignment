import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import About from "pages/About";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/about" exact component={About} />
      <Route path="*" exact render={() => <Redirect to="/about" />} />
    </Switch>
  );
};

export default Routes;
