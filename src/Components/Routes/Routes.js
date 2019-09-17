import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Aux from '../../hoc/hoc';
import Home from '../../Components/HomeComponent/HomeComponent';
import EventsGet from '../../Components/EventsComponent/MainSectionGet/MainSection';
import Register from '../RegisterComponent/Register';
import signin from '../AuthComponent/signin';
import signUp from '../AuthComponent/signup';
import Registered from '../Registered/Registered';
import About from '../AboutComponent/AboutComponent';
import Logout from '../../Containers/AuthContainer/Logout/Logout';
import CampUsersGet from '../AdminComponent/CampUsersGet/CampUsersGet';
import CampUsersUpdate from '../../Containers/AdminContainer/CampUsers/CampUsersUpdate';
import SpeakersGet from '../AdminComponent/SpeakersGet/SpeakersGet';
import speakerspost from '../../Containers/AdminContainer/Speakers/speakerspost';
import SpeakersUpdate from '../../Containers/AdminContainer/Speakers/SpeakersUpdate';
import SpeakersDelete from '../../Containers/AdminContainer/Speakers/SpeakersDelete';
import events from '../../Components/AdminComponent/EventsGet/EventsGet';
import EventsPost from '../../Containers/AdminContainer/Events/EventsPost';
import EventsUpdate from '../../Containers/AdminContainer/Events/EventsUpdate';
import EventsDelete from '../../Containers/AdminContainer/Events/EventsDelete';
const Routes = props => {
  let paths = (
    <Aux>
      <Route path="/" exact component={Home} />
      <Route path="/events" exact component={EventsGet} />
      <Route path="/register" exact component={Register} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={signin} />
      <Route path="/thankyou" exact component={Registered} />
      <Route path="/signup" exact component={signUp} />
    </Aux>
  );
  if (props.isAuth) {
    paths = (
      <Aux>
        {' '}
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={EventsGet} />
        <Route path="/events/:id" exact component={EventsUpdate} />
        <Route path="/events/delete/:id" exact component={EventsDelete} />
        <Route path="/adminevents" exact component={events} />
        <Route path="/createevent" exact component={EventsPost} />
        <Route path="/register" exact component={Register} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={signin} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/signup" exact component={signUp} />
        <Route path="/campusers" exact component={CampUsersGet} />
        <Route path="/updateattendees/:id" exact component={CampUsersUpdate} />
        <Route path="/speakers" exact component={SpeakersGet} />
        <Route path="/speakers/:id" exact component={SpeakersUpdate} />
        <Route path="/speakers/delete/:id" exact component={SpeakersDelete} />
        <Route path="/createspeaker" exact component={speakerspost} />
        <Route path="/thankyou" exact component={Registered} />
      </Aux>
    );
  }
  return (
    <Router>
      <Switch>{paths}</Switch>
    </Router>
  );
};
export default Routes;
