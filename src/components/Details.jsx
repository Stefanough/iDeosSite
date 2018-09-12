import React from 'react';
import { Button } from 'react-bootstrap';

const Details = () => (
  <div className="details">
    <div className="test">
      <h5>TEST</h5><p>You can test your smart contracts by running a localhosted EOS blockchain on your system. No need to stake new tokens for the testing phase.</p>
    </div>
    <div className="compile">
      <h5>COMPILE</h5><p>The integrated compiler allows you to be ready to deploy after at each update.</p>
    </div>
    <div className="deploy">
      <h5>DEPLOY</h5><p>It just takes one click to deploy your smart contracts on the EOS blockchain.</p>
    </div>
    <div className="build">
      <h5>BUILD</h5><p>With iDeos building a decentralized App doesn't require additional time or research. You can focus on your smart contracts while all the rest is integrated in your development workflow.</p>
    </div>
  </div>
);


export default Details;
