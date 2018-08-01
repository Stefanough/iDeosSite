import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Routes to render
import ArchiveOrg from './ArchiveOrg';
import Home from './Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/archive" component={ArchiveOrg} />
    </Switch>
  </main>
)

export default Main;
