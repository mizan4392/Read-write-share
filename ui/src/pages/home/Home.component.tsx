import Layout, { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { Navigation } from "../../components/navigation/Navigation.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './home.css'
import { NewsFeed } from "../newsFeed/NewsFeed.page";
import * as ROUTES from '../../utils/routes'
import { Login } from "../login/Login.page";
import { SignUp } from "../signup/SignUp.page";
import { Profile } from "../profile/Profile.page";
export const Home: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ background: "#fff" }} className="header">
          <Navigation />
        </Header>
        <Content>
          <AppRoute />
        </Content>
      </Layout>
    
    </Router>
  );
};

const AppRoute: React.FC = () => {
  return <Switch>
    <Route exact path={ROUTES.ROOT} component={NewsFeed} />
    <Route exact path={ROUTES.LOGIN} component={Login} />
    <Route exact path={ROUTES.SIGNUP} component={SignUp} />
    <Route exact path={ROUTES.PROFILE} component={Profile} />
  </Switch>

}