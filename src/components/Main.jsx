import React from 'react';
import { Switch, Route } from 'react-router-dom';


// import Routes to render
import ArchiveOrg from './ArchiveOrg';
import Home from './Home';
import Documentation from './Documentation';


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
