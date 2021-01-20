import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, PostPage } from '../pages';

const AppRouter = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/post/:id" component={PostPage} />
    </Switch>
  );
};

export default AppRouter;
