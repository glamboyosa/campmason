import React from 'react';
import classes from './footer.module.css';
const footer = () => (
  <footer style={{ textAlign: 'center' }}>
    <span className={classes.span}>
      Made with <i className={['icon ion-md-heart', classes.icon].join(' ')} />{' '}
      by Timothy Ogbemudia, JavaScript Developer.
    </span>
  </footer>
);
export default footer;
