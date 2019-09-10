import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';
class Home extends Component {
  componentDidMount() {
    this.props.fetchCamps();
  }
  render() {
    return <h1>HOME COMPONENT GOES HERE</h1>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCamps: () => dispatch(actions.homeInit())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Home);
