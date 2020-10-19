import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home'
import About from './components/About'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import SearchData from './components/SearchData'


function App() {
  const [searchInput, setSearchInput] = useState('')
  const [redirect, setRedirect] = useState(false)


  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const getSearchResult = (event) => {
    event.preventDefault()
    let isSpaces = searchInput.split('').every((char) => char === ' ');
    // If user hasn't typed anything, don't let them hit enter and go to empty search result page
    if (searchInput === '') {
      setRedirect(false);
    } else if (isSpaces) {
      setRedirect(false);
    } else {
      setRedirect(true);
    }
  }

  if (redirect) {
    return (
      <Redirect
        to={{ pathname: `/search/${searchInput}`, state: { searchTerm: searchInput } }}
      />
    );
  }
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>

      <Form onSubmit={getSearchResult}>
        <input type="text" onChange={handleChange} placeholder="search for breweries..."></input>
        <input type="submit" onClick={getSearchResult}></input>
      </Form>

    </Fragment>
  );
}

export default App;
