/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Commands from './Pages/Commands';
import Settings from './Pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
        <Route exact path="/commands" render={props => <Commands {...props} />} />
        <Route exact path="/settings" render={props => <Settings {...props} />} />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

// localhost/sendText?user=&message=

export default App;
