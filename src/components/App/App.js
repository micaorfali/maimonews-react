import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Search from '../../pages/Search'
import SearchAppBar from '../SearchAppBar/SearchAppBar'

function App() {
  return (
    <>
      <Router>
        <SearchAppBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/category/:slug'>
            <Category />
          </Route>
          <Route path='/search/:slug'>
            <Search />
          </Route>
          <Route path='*'>
            <p>Page not found</p>
          </Route>
          
        </Switch>
      </Router>

    </>
  );
}

export default App;

