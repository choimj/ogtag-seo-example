import React from 'react';
import { Route, Switch } from 'react-router';

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/post/:id" />
  </Switch>
);
