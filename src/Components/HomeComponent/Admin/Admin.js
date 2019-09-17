import React from 'react';
import { Link } from 'react-router-dom';
import classes from './admin.module.css';
const AdminSection = () => {
  return (
    <div className={classes.flex}>
      <div>
        <h4 className={classes.h4}>Attendees</h4>
        <Link className={classes.Link} to="/campusers">
          View Attendees
        </Link>
      </div>
      <div>
        <h4 className={classes.h4}>Events</h4>
        <Link className={classes.Link} to="/adminevents">
          View Events
        </Link>
      </div>
      <div>
        <h4 className={classes.h4}>Speakers</h4>
        <Link className={classes.Link} to="/speakers">
          View Speakers
        </Link>
      </div>
    </div>
  );
};

export default AdminSection;
