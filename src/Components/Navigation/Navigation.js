import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './nav.module.css';
class Navigation extends Component {
  render() {
    let Class = classes.mainNav;
    if (this.props.auth) {
      console.log('auth active');
      Class = [classes.mainNav, classes.authPage].join(' ');
    }
    return (
      <nav>
        <ul className={Class}>
          <Link to="/">
            {' '}
            <p>Camp Mason</p>
          </Link>
          {this.props.home ? (
            <div>
              {' '}
              <li>
                {this.props.isAuth ? (
                  <Link className={classes.home} to="/logout">
                    Logout
                  </Link>
                ) : (
                  <Link className={classes.home} to="/login">
                    Sign In
                  </Link>
                )}
              </li>
              {this.props.isAuth ? (
                <li>
                  <Link className={classes.home} to="/signup">
                    Sign up staff
                  </Link>
                </li>
              ) : null}
              <li>
                <Link className={classes.home} to="/events">
                  Activites
                </Link>
              </li>
              <li>
                <Link className={classes.home} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={classes.home} to="/">
                  Home
                </Link>
              </li>{' '}
            </div>
          ) : (
            <div>
              {' '}
              <li>
                {this.props.isAuth ? (
                  <Link className={classes.link} to="/logout">
                    Logout
                  </Link>
                ) : (
                  <Link className={classes.link} to="/login">
                    Sign In
                  </Link>
                )}
              </li>
              {this.props.isAuth ? (
                <li>
                  <Link className={classes.link} to="/signup">
                    Sign up staff
                  </Link>
                </li>
              ) : null}
              <li>
                <Link className={classes.link} to="/events">
                  Activites
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/">
                  Home
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.authPage,
    isAuth: state.auth.isAuth
  };
};
export default connect(
  mapStateToProps,
  null
)(Navigation);
