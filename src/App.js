import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Profile from './pages/Profile';
import * as ROUTES from './assets/constants/Routs'

import './App.css'
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";
import NewsFeed from './pages/NewsFeed';
import Login from './pages/Login';

function App() {
  return (
    <div>

      <Navigation />
      <Router>
        <Route exact path={ROUTES.ROOT} component={withRouter(NewsFeed)} />
        <Route exact path={ROUTES.PROFILE} component={withRouter(Profile)} />
        <Route exact path={ROUTES.LOGIN} component={withRouter(Login)} />

      </Router>
    </div>
  );
}

export default App;
