import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../../Components/HomeComponent/HomeComponent';
import EventsGet from '../../Components/EventsComponent/MainSectionGet/MainSection';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={EventsGet} />
      </Switch>
    </Router>
  );
};
export default Routes;
