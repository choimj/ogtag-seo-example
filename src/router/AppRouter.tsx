import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, PostPage } from '../pages';

const AppRouter = (): React.ReactElement => {
  return (
    <div className="snbnext">
      <div className="cmt dzt_font">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/post/:id" component={PostPage} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRouter;
