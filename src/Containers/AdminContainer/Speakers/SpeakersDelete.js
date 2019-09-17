import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index';
import classes from '../../RegisterContainer/register.module.css';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
class SpeakersDelete extends Component {
  componentDidMount() {}
  rejectHandler = () => {
    this.props.history.push('/speakers');
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
            <p>Are you sure you want to delete this speaker?</p>
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
      form = <Redirect to="/speakers" />;
    }
    if (this.props.error) {
      form = <Modal>Oops...Something went wrong.</Modal>;
    }
    if (this.props.isUpdated) {
      form = <Redirect to="/speakers" />;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    loading: state.speaker.loading,
    error: state.speaker.error != null,
    isUpdated: state.speaker.isUpdated,
    token: state.auth.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: (token, id) => dispatch(actions.speakersDeleteInit(token, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakersDelete);
