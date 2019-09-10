import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav.module.css';
const Navigation = () => (
  <nav>
    <ul className={classes.mainNav}>
      <p>Camp Mason</p>
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
    </ul>
  </nav>
);
export default Navigation;
