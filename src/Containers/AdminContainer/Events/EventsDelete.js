import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index';
import classes from '../../RegisterContainer/register.module.css';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
class EventsDelete extends Component {
  componentDidMount() {}
  rejectHandler = () => {
    this.props.history.push('/admindevents');
  };
  authHandler = e => {
    e.preventDefault();
    const id = Object.keys(this.props.match.params)
      .map(el => {
        return this.props.match.params[el];
      })
      .join('');

    this.props.delete(this.props.token, id);
  };
  render() {
    let form = <Spinner />;
    if (this.props.token !== null) {
      if (!this.props.loading) {
        form = (
          <Modal>
            <p>Are you sure you want to delete this event?</p>
            <div className={classes.formFlexContainer}>
              {' '}
              <button onClick={this.rejectHandler} className={classes.danger}>
                No
              </button>{' '}
              <button onClick={this.authHandler} className={classes.success}>
                Yes
              </button>{' '}
            </div>
          </Modal>
        );
      }
    } else {
      form = <Redirect to="/adminevents" />;
    }
    if (this.props.error) {
      form = <Modal>Oops...Something went wrong.</Modal>;
    }
    if (this.props.isUpdated) {
      form = <Redirect to="/adminevents" />;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    loading: state.event.loading,
    error: state.event.error != null,
    isUpdated: state.event.isUpdated,
    token: state.auth.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: (token, id) => dispatch(actions.eventsDeleteInit(token, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsDelete);
