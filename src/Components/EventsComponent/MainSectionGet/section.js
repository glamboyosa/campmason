import React from 'react';
import classes from './section.module.css';
const events = props => (
  <div className={classes.events}>
    <h1>
      Here's everything you'll do at camp{' '}
      <span role="img" aria-label="A winking emoji">
        😉
      </span>
    </h1>
    <ul>
      {props.eventBy.map(el => (
        <li key={el}>{el}</li>
      ))}
    </ul>
    <p>What are you waiting for ? </p>
    <button className={classes.btn} onClick={props.clicked}>
      Sign Up Now
    </button>
  </div>
);
export default events;
