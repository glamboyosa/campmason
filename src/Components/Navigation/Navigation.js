import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav.module.css';
const Navigation = props => (
  <nav>
    <ul className={classes.mainNav}>
      <p>Camp Mason</p>
      {props.home ? (
        <div>
          {' '}
          <li>
            <Link className={classes.home} to="/auth">
              Sign In
            </Link>
          </li>
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
            <Link className={classes.link} to="/auth">
              Sign In
            </Link>
          </li>
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

export default Navigation;
