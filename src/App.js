import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import SearchData from './components/SearchData'

export const SearchContext = React.createContext()

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [redirect, setRedirect] = useState(null)


  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const getSearchResult = (event) => {
    event.preventDefault()
    console.log(searchInput);

    let isSpaces = searchInput.split('').every((char) => char === ' ');
    // If user hasn't typed anything, don't let them hit enter and go to empty search result page
    if (searchInput === '') {
      setRedirect(null);
    } else if (isSpaces) {
      setRedirect(null);
    } else {
      setRedirect(`/search/${searchInput}`);
    }
  }

  // put the redirect into the big return (next step)
  // if (redirect) {
  //   return (
  //     <Router>
  //       <Redirect
  //         to={{ pathname: `/search/${searchInput}`, state: { searchInput } }}
  //       />
  //       <SearchData />
  //     </Router>
  //   );
  // }

  // {/* <Route exact path="/search/:result" component={SearchData} /> */ }
  // <SearchData render={() =>
  return (
    <Fragment>
      <SearchContext.Provider value={searchInput}>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search/:result" render={(props) => <SearchData {...props} />} />

          </Switch>

          {redirect ? <Redirect to={redirect} /> : null}
        </Router>
        <Form onSubmit={getSearchResult}>
          <input type="text" onChange={handleChange} placeholder="search for breweries..."></input>
          <button type="submit">search</button>
        </Form>
      </SearchContext.Provider>

    </Fragment>

  );
}

export default App;
