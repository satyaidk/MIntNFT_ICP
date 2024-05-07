import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import MintNFT from './components/MintNFT';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/mint" component={MintNFT} />
      </Switch>
    </Router>
  );
}

export default App;
