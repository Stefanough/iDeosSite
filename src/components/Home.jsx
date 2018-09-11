import React from 'react';
import Landing from './Landing.jsx';
import Details from './Details.jsx';
import Bio from './Bio.jsx';
import Connect from './Connect.jsx';
import { Button } from 'react-bootstrap';

const Home = () => (
  <div id="home">
  <Landing></Landing>
  <Details></Details>
  <Bio></Bio>
  <Connect></Connect>
  </div>
)

export default Home;
