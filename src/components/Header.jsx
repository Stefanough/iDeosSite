import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
      {/* <img src="../../assets/iDeosicon.png"></img> */}
        <Link to="/"><a>iDeos</a></Link>
        <Link to="/archive"><a>EOS Tools</a></Link>
        <Link to="/documentation"><a>Documentation</a></Link>
      </ul>
    </nav>
  </header>
)

export default Header;
