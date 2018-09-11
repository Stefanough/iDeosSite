import React from 'react';
import { SocialIcon } from 'react-social-icons';
import victor from '../../assets/bioImages/victor.jpg';
import stefan from '../../assets/bioImages/stefan.jpg';
import will from '../../assets/bioImages/will.jpg';
import james from '../../assets/bioImages/james.jpg';

const Bio = () => {
  return (
    <div className="Bio">
      <h5>Team</h5>
      <p>We believe in making blockchain development accessible and approachable for every developer.</p>
      <div className="Vic">
        <img id="vic" src={victor}></img>
        <h3>Victor Faucon</h3>
        <SocialIcon url="https://github.com/VernSul"></SocialIcon>
        <SocialIcon url="https://www.linkedin.com/in/victor-faucon-8582a333/" ></SocialIcon>
      </div>
      <div className="Stefan">
        <img id="Stefan" src={stefan}></img>
        <h3>Stefan Armijo</h3>
        <SocialIcon url="https://github.com/Stefanough"></SocialIcon>
        <SocialIcon url="https://www.linkedin.com/in/stefanarmijo/"></SocialIcon>
      </div>
      <div className="Will">
        <img id="Will" src={will}></img>
        <h3>Will LeGate</h3>
        <SocialIcon url="https://github.com/wlegate"></SocialIcon>
        <SocialIcon url="https://www.linkedin.com/in/william-legate//"></SocialIcon>
      </div>
      <div className="James">
        <img id="James" src={james}></img>
        <h3>James Tu</h3>
        <SocialIcon url="https://github.com/milesmeow"></SocialIcon>
        <SocialIcon url="https://www.linkedin.com/in/jamestu2000/"></SocialIcon>
      </div>
    </div>
  )
}

export default Bio;