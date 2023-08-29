import React from "react";
import { connect } from "react-redux";

const LoginComponent = () => (
  <div>
    <h2>Please login</h2>
  </div>
);

const mapStateToProps = state => state;

export const ConnectedLogin = connect(mapStateToProps)(LoginComponent);
