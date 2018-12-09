import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Login from './Login';
import Portfolio from './Portfolio';
import Holdings from './Holdings';

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Holdings" component={Holdings} />
    </Switch>
  </Router>
)

export default App;