import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../Store/actions/index';
import { connect } from 'react-redux';
class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return <Redirect to="/" />;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Logout);
