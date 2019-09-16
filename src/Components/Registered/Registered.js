import React from 'react';
import classes from './registered.module.css';
import Layout from '../Layout/Layout';
const Registered = () => {
  return (
    <Layout>
      <div className={classes.div}>
        <h3>Thank you for registering</h3>
        <i
          className={[
            'icon ion-md-checkmark-circle-outline',
            classes.icons
          ].join(' ')}
        ></i>
        <h4>
          See you there{' '}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </h4>
      </div>
    </Layout>
  );
};

export default Registered;
