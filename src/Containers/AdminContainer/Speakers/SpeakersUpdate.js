import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index';
import classes from '../../RegisterContainer/register.module.css';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/modal';
class SpeakersUpdate extends Component {
  state = {
    fullname: ''
  };
  componentDidMount() {}
  authHandler = e => {
    e.preventDefault();
    const id = Object.keys(this.props.match.params)
      .map(el => {
        return this.props.match.params[el];
      })
      .join('');

    const data = {
      fullname: this.state.fullname
    };

    this.props.update(data, this.props.token, id);
  };
  render() {
    let form = <Spinner />;
    if (this.props.token !== null) {
      if (!this.props.loading) {
        form = (
          <div>
            <form onSubmit={this.authHandler}>
              <h3>Modify Speaker Details</h3>

              <input
                type="text"
                minLength={2}
                maxLength={256}
                placeholder="fullname"
                onChange={e => this.setState({ fullname: e.target.value })}
              />

              <button className={classes.btn} type="submit">
                Submit
              </button>
            </form>
          </div>
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
    update: (data, token, id) =>
      dispatch(actions.speakersPutDeleteInit(data, token, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakersUpdate);
