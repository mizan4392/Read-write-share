import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup'; 
import Profile from './pages/Profile';
import * as ROUTES from './assets/constants/Routs'


import {
	BrowserRouter as Router,
	Route,
	withRouter
} from "react-router-dom";
import NewsFeed from './pages/NewsFeed';

function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Navigation />
      <Router>
        <Route exact path={ROUTES.ROOT} component={withRouter(NewsFeed)} />
        <Route exact path={ROUTES.PROFILE} component={withRouter(Profile)} />
        <Route exact path={ROUTES.LOGIN} component={withRouter(Login)} />
        <Route exact path={ROUTES.SIGNIN} component={withRouter(Signup)} />
      </Router>
    </div>
  );
}

export default App;
