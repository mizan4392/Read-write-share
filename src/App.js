import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
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
    <div >
      <Navigation />
      <Router>
        <Route exact path={ROUTES.ROOT} component={withRouter(NewsFeed)} />
        <Route exact path={ROUTES.PROFILE} component={withRouter(Profile)} />
       
      </Router>
    </div>
  );
}

export default App;
