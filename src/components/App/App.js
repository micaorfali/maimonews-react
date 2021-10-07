import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../../pages/Home'
import Category from '../../pages/Category'

import SearchAppBar from '../SearchAppBar/SearchAppBar'


function App() {
  return (
    <>
      <SearchAppBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/category/:slug'>
            <Category />
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

