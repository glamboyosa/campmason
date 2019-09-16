import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Section1.module.css';
const section1 = () => {
  return (
    <div>
      <h3>Our Story?</h3>
      <br />
      <p>
        We are a small tight-knit group filled with people of different
        professions from counsellors to software engineers
      </p>
      <p>
        With one single goal: provide fun for adults because we know how
        frustrating the real world can be
        <br /> so at Camp Mason our sole goal is to <br /> provide fun and
        relaxation far away from the hustle and bustle of the city{' '}
      </p>
      <br />
      <Link className={classes.link} to="/register">
        <p>
          Sounds appealing? Register{' '}
          <span role="img" aria-label="emoji">
            😛
          </span>
        </p>
      </Link>
    </div>
  );
};

export default section1;
