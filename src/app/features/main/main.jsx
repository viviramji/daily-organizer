import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import { store } from "../../store";
import { history } from "../../store/history";
import { ConnectedDashboard } from "../dashboard/dashboard";
import { ConnectedNavigation } from "../navigation/navigation";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        {/* <ConnectedDashboard /> */}
        <ConnectedNavigation />

        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />

      </div>
    </Provider>
  </Router>
);
