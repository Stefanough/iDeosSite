import React from 'react';
import backgroundVideo from '../../assets/bluedots10_vlc_720.webm';
// import { Button } from 'react-bootstrap';

const Landing = () => (
  <div id="home-container">
    <video autoPlay muted loop src={backgroundVideo} id="videoBackground" />
    <h4>The first IDE to develop dApps on EOS</h4>
    <p>You can now build, test and deploy your EOS smart contracts with the same tool.</p>
    <h1>Coming soon</h1>
    {/* <button>Download iDeos</button> */}

  </div>
);

export default Landing;
