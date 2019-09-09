import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../../Containers/HomeContainer/HomeContainer';
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);
export default Routes;
