import React from "react";

import { Switch, Route } from "react-router-dom";
import Categories from "./components/categories";
import Users from "./components/users/index.js";
import Home from "./components/home/index.js";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/categories" component={Categories} />
      <Route path="/users" component={Users} />
    </Switch>
  </main>
);
export default Main;
