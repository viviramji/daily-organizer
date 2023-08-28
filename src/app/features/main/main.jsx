import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import { store } from "../../store";
import { history } from "../../store/history";
import { ConnectedDashboard } from "../dashboard/dashboard";
import { ConnectedNavigation } from "../navigation/navigation";
import { ConnectedTaskDetail } from "../task/taskDetail";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        {/* <ConnectedDashboard /> */}
        <ConnectedNavigation />

        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
        { /* <Route exact path="/task/:id" render={({props})  => <ConnectedTaskDetail match={props} />} /> */ }
        <Route exact path="/task/:id" render={({match})  => <ConnectedTaskDetail match={match} />} />

      </div>
    </Provider>
  </Router>
);
