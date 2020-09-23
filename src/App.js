import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Final from "./components/Final";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Final} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
