import React from 'react';
import Home from './Home';
import './App.css';
import {Route, Switch} from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
