import React from 'react';
import Navigation from '../Navigation/Navigation';
import Aux from '../../hoc/hoc';
import Footer from '../UI/Footer/footer';
const layout = props => (
  <Aux>
    <Navigation />
    <main>{props.children}</main>
    <Footer />
  </Aux>
);
export default layout;
