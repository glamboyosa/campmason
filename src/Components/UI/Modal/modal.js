import React from 'react';
import classes from './modal.module.css';
const modal = props => (
  <div className={classes.Modal}>
    <p>{props.children}</p>
  </div>
);
export default modal;
