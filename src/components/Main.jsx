import React from 'react';
import { Switch, Route } from 'react-router-dom';


// import Routes to render
import ArchiveOrg from './ArchiveOrg.jsx';
import Home from './Home.jsx';
import Documentation from './Documentation.jsx';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/archive" component={ArchiveOrg} />
      <Route path="/documentation" component={Documentation} />
    </Switch>

  </main>
);

export default Main;
