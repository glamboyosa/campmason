import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/modal';
import * as actions from '../../Store/actions/index';
import classes from './auth.module.css';
class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    isAdmin: ''
  };
  componentDidMount() {
    this.props.auth();
    this.setState({ isAdmin: true });
  }
  authHandler = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      isAdmin: this.state.isAdmin
    };
    console.log(data);
    this.props.login(data, this.props.token);
  };
  render() {
    let form = (
      <div className={classes.div}>
        <form onSubmit={this.authHandler}>
          <h3>SIGN UP</h3>
          <input
            type="text"
            minLength={2}
            maxLength={256}
            placeholder="Name"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            minLength={2}
            maxLength={256}
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            minLength={2}
            maxLength={256}
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <select
            placeholder="isAdmin"
            onChange={e => this.setState({ isAdmin: e.target.value })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={classes.btn} type="submit">
            Register
          </button>
          <Link to="/login">Already have an account? Sign in</Link>
        </form>
      </div>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    if (this.props.error) {
      form = <Modal>Oops. Something went wrong</Modal>;
    }
    if (this.props.isSignedUp) {
      form = <Redirect to="/" />;
    }
    if (!this.props.token) {
      form = <Modal>Oops..Login as admin then register a new user</Modal>;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
    isSignedUp: state.auth.isSignedUp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: form => dispatch(actions.signUpInit(form)),
    auth: () => dispatch(actions.authPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
