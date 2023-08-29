import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { Redirect } from "react-router";

import { store } from "../../store";
import { history } from "../../store/history";
import { ConnectedDashboard } from "../dashboard/dashboard";
import { ConnectedNavigation } from "../navigation/navigation";
import { ConnectedTaskDetail } from "../task/taskDetail";
import { ConnectedLogin } from "../auth/login";

const RouteGuard = Component => ({ match }) => {
  console.log("RouteGuard", match);
  if (!store.getState().session.authenticated) {
    // redirect to login page
    return <Redirect to="/" />;
  }
  return <Component match={match} />;
};

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        {/* <ConnectedDashboard /> */}
        <ConnectedNavigation />

        <Route exact path="/" component={ConnectedLogin} />
        <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} />
        { /* <Route exact path="/task/:id" render={({props})  => <ConnectedTaskDetail match={props} />} /> */ }
        <Route exact path="/task/:id" render={RouteGuard(ConnectedTaskDetail)} />

      </div>
    </Provider>
  </Router>
);
