import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Header from './components/Header/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import SearchResult from './components/SearchResult'
import Brewery from './components/Brewery'
import './styles/App.scss'

export const SearchContext = React.createContext()

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [redirect, setRedirect] = useState(null)

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const getSearchResult = (event) => {
    event.preventDefault();

    let isSpaces = searchInput.split('').every((char) => char === ' ');
    // If user hasn't typed anything, don't let them hit enter and go to empty search result page
    if (searchInput === '') {
      setRedirect(null);
    } else if (isSpaces) {
      setRedirect(null);
    } else {
      setRedirect(`/search/${searchInput}`);
      event.target.reset()
    }
  }

  return (
    <div className='App'>
      <SearchContext.Provider value={searchInput}>
        <Header />
        <Form className="search-bar" onSubmit={getSearchResult}>
          <input type="text" onChange={handleChange} placeholder="ex: Massachusetts, cider..."></input>
          <button type="submit">search</button>
        </Form>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search/:result" render={(props) => <SearchResult {...props} />} />
            <Route exact path="/search/brewery/:id" render={(props) => <Brewery {...props} />} />

          </Switch>
          {redirect ? <Redirect to={redirect} /> : null}
        </Router>

      </SearchContext.Provider>
    </div>

  );
}

export default App;
