import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index';
import classes from '../../RegisterContainer/register.module.css';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
class SpeakersPost extends Component {
  state = {
    fullname: ''
  };
  submitHandler = e => {
    e.preventDefault();
    const data = {
      fullname: this.state.fullname
    };

    this.props.post(data, this.props.token);
  };
  render() {
    let form = <Spinner />;
    if (this.props.token !== null) {
      if (!this.props.loading) {
        form = (
          <div style={{ textAlign: 'center' }}>
            <h4>Register a new speaker</h4>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                placeholder="Fullname"
                onChange={e => this.setState({ fullname: e.target.value })}
              />
              <button className={classes.btn}>Submit</button>
            </form>
          </div>
        );
      }
      if (this.props.isPosted) {
        form = <Redirect to="/speakers" />;
      }
      if (this.props.error) {
        form = <Modal>Oops...Something went wrong</Modal>;
      }
    } else {
      form = <Redirect to="/speakers" />;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    loading: state.speaker.loading,
    error: state.speaker.error != null,
    token: state.auth.token,
    isPosted: state.speaker.isUpdated
  };
};
const mapDispatchToProps = dispatch => {
  return {
    post: (data, token) => dispatch(actions.speakersPostInit(data, token))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakersPost);
