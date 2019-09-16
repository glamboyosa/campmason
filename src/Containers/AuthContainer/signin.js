import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/modal';
import * as actions from '../../Store/actions/index';
import classes from './auth.module.css';
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  componentDidMount() {
    this.props.auth();
  }
  authHandler = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    this.props.login(data);
  };
  render() {
    let form = (
      <div className={classes.div}>
        <form onSubmit={this.authHandler}>
          <h3>WELCOME BACK</h3>
          <span>Email: admin@admin.com</span>
          <span>Password: admin</span>
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
          <button className={classes.btn} type="submit">
            Register
          </button>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </form>
      </div>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    if (this.props.error) {
      form = <Modal>Oops. Something went wrong</Modal>;
    }
    if (this.props.isAuth) {
      form = <Redirect to="/" />;
    }
    return form;
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    loading: state.auth.loading,
    error: state.auth.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: form => dispatch(actions.authInit(form)),
    auth: () => dispatch(actions.authPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
