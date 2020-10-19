import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home'
import About from './components/About'


function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />

      </Switch>

      <input placeholder="search for breweries..."></input>
    </Fragment>
  );
}

export default App;
