// The basics
import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "./header";
import Routes from "./routes";

import "./preloader.min.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        />
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
