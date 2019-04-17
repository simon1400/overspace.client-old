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

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ "./contacts"),
  loading: () => null,
  modules: ["contact"]
});

const News = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ "./news"),
  loading: () => null,
  modules: ["news"]
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/projects/:url" component={Project} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/news" component={News} />

    <Route component={NotFound} />
  </Switch>
);
