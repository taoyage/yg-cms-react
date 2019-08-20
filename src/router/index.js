import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';

import User from '../pages/user';

const AppRouter = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/user" />}></Route>
        <Route path="/user" component={User} />
      </Switch>
    </App>
  </Router>
);

export default AppRouter;
