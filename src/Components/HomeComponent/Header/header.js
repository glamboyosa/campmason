import React from 'react';
import classes from './header.module.css';
const header = props => (
  <div className={classes.header}>
    <div className={classes.heading}>
      <h2>Welcome To Camp Mason</h2>
      <p>
        Outdoor camping in a place far away from the city
        <br /> filled with various programs and entertainment <br /> every
        single day.
      </p>
      <div className={classes.flex}>
        <span>Begins {props.begin}</span>
        <span>Ends {props.end}</span>
      </div>
      <button className={classes.btn} onClick={props.clicked}>
        Register
      </button>
    </div>
  </div>
);
export default header;
