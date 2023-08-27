import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import { store } from "../../store";
import { ConnectedDashboard } from "../dashboard/dashboard";
import { history } from "../../store/history";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        {/* <ConnectedDashboard /> */}

        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />

      </div>
    </Provider>
  </Router>
);
