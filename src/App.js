import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './App.css';

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Comics from "./containers/Comics/Comics";
import Characters from "./containers/Characters/Characters";
import Character from "./containers/Character/Character";

library.add(faStar);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route path="/characters/character/:id">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
