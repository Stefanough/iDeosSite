import React from 'react';
import { Button } from 'react-bootstrap';

const Landing = () => {

    return (
    <div id="home-container">
     <video autoPlay muted loop src="./../../assets/BlueParticles.mov" id="videoBackground"> </video>
     <div id="presentation">
     <h4>The first IDE to develop dApps on EOS</h4>
        <p>You can now build, test and deploy your EOS smart contracts with the same tool.</p>
        <button>Download iDeos</button>
    </div>
       
     

    </div>
    
    )
}

export default Landing;