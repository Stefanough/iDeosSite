import React from 'react';
import { SocialIcon } from 'react-social-icons';
import victor from '../../assets/bioImages/victor.jpg';
import stefan from '../../assets/bioImages/stefan.jpg';
import will from '../../assets/bioImages/will.jpg';
import james from '../../assets/bioImages/james.jpg';

const Bio = () => (
  <div className="Bio">
    <h5>Team</h5>
    <p>
      We believe in making blockchain development accessible and
      approachable for every developer.
    </p>
    <div className="Vic">
      <img id="vic" src={victor} alt="Victor Faucon" />
      <h3>Victor Faucon</h3>
      <SocialIcon url="https://github.com/VernSul" />
      <SocialIcon url="https://www.linkedin.com/in/victor-faucon-8582a333/" />
    </div>
    <div className="Stefan">
      <img id="Stefan" src={stefan} alt="Stefan Armijo" />
      <h3>Stefan Armijo</h3>
      <SocialIcon url="https://github.com/Stefanough" />
      <SocialIcon url="https://www.linkedin.com/in/stefanarmijo/" />
    </div>
    <div className="Will">
      <img id="Will" src={will} alt="William Legate" />
      <h3>Will LeGate</h3>
      <SocialIcon url="https://github.com/wlegate" />
      <SocialIcon url="https://www.linkedin.com/in/william-legate//" />
    </div>
    <div className="James">
      <img id="James" src={james} alt="James Tu" />
      <h3>James Tu</h3>
      <SocialIcon url="https://github.com/milesmeow" />
      <SocialIcon url="https://www.linkedin.com/in/jamestu2000/" />
    </div>
  </div>
);

export default Bio;
