import React from 'react';
import Landing from './Landing';
import Details from './Details';
import Bio from './Bio';
import Connect from './Connect';
// import { Button } from 'react-bootstrap';

const Home = () => (
  <div id="home">
    <Landing />
    <Details />
    <Bio />
    <Connect />
  </div>
);

export default Home;
