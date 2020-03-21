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
import Signup from './pages/SignUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setNotificationState } from './redux/actions/action_misc'


class App extends React.Component {




  render() {
    return (
      <div >
        <Router>

          <Navigation />
          <Route exact path={ROUTES.ROOT} component={withRouter(NewsFeed)} />
          <Route exact path={ROUTES.PROFILE} component={withRouter(Profile)} />
          <Route exact path={ROUTES.LOGIN} component={withRouter(Login)} />
          <Route exact path={ROUTES.SIGNIN} component={withRouter(Signup)} />


        </Router>
      </div >
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setNotificationState },
    dispatch
  );
}

function mapStateToProps({ }) {
  return {};
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
