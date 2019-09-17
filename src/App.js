import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './Components/Routes/Routes';
import { connect } from 'react-redux';
import * as actions from './Store/actions/index';
class App extends Component {
  componentDidMount() {
    this.props.persist();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Routes isAuth={this.props.isAuth} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    persist: () => dispatch(actions.persistUser())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
