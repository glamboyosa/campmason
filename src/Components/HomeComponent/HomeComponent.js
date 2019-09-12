import React from 'react';
import Layout from '../Layout/Layout';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
const Home = () => {
  const home = true;
  return (
    <Layout passonprops={home}>
      <HomeContainer />
    </Layout>
  );
};

export default Home;
