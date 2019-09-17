import React from 'react';
import classes from './section2.module.css';
const section2 = () => (
  <div className={classes.section}>
    <div>
      <h3>Camp in the moonlight</h3>
      <p>
        Enjoy scenic night life far from the hustle and bustle of the city{' '}
        <br />. Camp fires, smores, marshmellows 🤤 <br />
        Regale tales of your childhood,
        <br /> bond, relax, breathe!
      </p>
    </div>
    <div>
      <img
        className={classes.image}
        src=" https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        alt="camp at night"
      />
    </div>
  </div>
);
export default section2;
