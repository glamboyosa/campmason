import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
import * as actions from '../../../Store/actions/index';
class CampUsers extends Component {
  componentDidMount() {
    this.props.get();
  }
  render() {
    let data = <Spinner />;

    if (this.props.users !== null) {
      if (!this.props.loading) {
        data = (
          <div style={{ textAlign: 'center' }}>
            <h3>Attendees</h3>
            <ul>
              {this.props.users.map(el => {
                return (
                  <li key={el._id}>
                    {`${el.firstName}  ${el.lastName}`}{' '}
                    <Link to={`updateattendees/${el._id}`}>
                      Update Attendee
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
    if (this.props.error) {
      data = <Modal>Oops...Something went wrong.</Modal>;
    }
    return data;
  }
}
const mapStateToProps = state => {
  return {
    loading: state.campUser.loading,
    error: state.campUser.error != null,
    users: state.campUser.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(actions.campUsersInit())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CampUsers));
