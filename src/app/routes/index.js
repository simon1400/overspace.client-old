import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import NotFound from "./not-found";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ "./homepage"),
  loading: () => null,
  modules: ["homepage"]
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./about"),
  loading: () => null,
  modules: ["about"]
});

const Project = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ "./project"),
  loading: () => null,
  modules: ["project"]
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/projects/:url" component={Project} />
    <Route exact path="/about" component={About} />

    <Route component={NotFound} />
  </Switch>
);
