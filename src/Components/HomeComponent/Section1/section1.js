import React from 'react';
import classes from './section1.module.css';
const section1 = props => (
  <div className={classes.section}>
    <div>
      <h3>Your perfect summer starts here</h3>
      <p>
        Engage in a variety of activities ranging from kayaking to baking.{' '}
        <br />
        Make new friends, socialize, have fun!
      </p>
      <button className={classes.btn} onClick={props.clicked}>
        View Activities
      </button>
    </div>
    <div>
      <img
        src=" https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
        alt="a woman kayaking"
      />
    </div>
  </div>
);
export default section1;
