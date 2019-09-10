import React from 'react';
import Navigation from '../Navigation/Navigation';
import Aux from '../../hoc/hoc';
const layout = props => (
  <Aux>
    <Navigation />
    <main>{props.children}</main>
  </Aux>
);
