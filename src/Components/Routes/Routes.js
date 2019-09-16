import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../../Components/HomeComponent/HomeComponent';
import EventsGet from '../../Components/EventsComponent/MainSectionGet/MainSection';
import Register from '../RegisterComponent/Register';
import signin from '../AuthComponent/signin';
import signUp from '../AuthComponent/signup';
import Registered from '../Registered/Registered';
import About from '../AboutComponent/AboutComponent';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={EventsGet} />
        <Route path="/register" exact component={Register} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={signin} />
        <Route path="/signup" exact component={signUp} />
        <Route path="/thankyou" exact component={Registered} />
      </Switch>
    </Router>
  );
};
export default Routes;
