import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import RestaurantPage from './RestaurantPage'
import SearchPage from './SearchPage'

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/SearchPage" component={SearchPage} />
      <Route path="/RestaurantPage" component={RestaurantPage} />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
