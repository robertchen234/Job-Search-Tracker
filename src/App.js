import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getUsers } from "./actions/userActions";

import UserContainer from "./containers/UserContainer";

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <Route path="/users/:id" />
        <Route path="/users/" render={() => <UserContainer />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return { getUsers: bindActionCreators(getUsers, dispatch) };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
