import React from 'react';

// import components
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import './App.scss';
import ideosIcon from './../assets/iDeosiconSmall.png'

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="header-container">
          <img src={ideosIcon}></img>
          <Header />
        </div>
        <Main />
      </div>
    )
  }
}

export default App;
