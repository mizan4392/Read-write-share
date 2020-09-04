import React from "react";
import "./App.css";
import Navigation from "./components/Navigation.component.tsx";
import Profile from "./pages/Profile";
import * as ROUTES from "./assets/constants/Routs";
import "suneditor/dist/css/suneditor.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";
import Login from "./pages/Login.tsx";
import Signup from "./pages/SignUp.tsx";
import { Container } from "@material-ui/core";
import "@pathofdev/react-tag-input/build/index.css";
import { useStoreActions } from "./hooks/easyPeasy";
function App() {
  const getUser = useStoreActions((action) => action.auth.getUser);
  React.useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div>
      <Router>
        <RenderView>
          <Route exact path={ROUTES.ROOT} component={withRouter(NewsFeed)} />
          <Route exact path={ROUTES.PROFILE} component={withRouter(Profile)} />
          <Route exact path={ROUTES.LOGIN} component={withRouter(Login)} />
          <Route exact path={ROUTES.SIGNIN} component={withRouter(Signup)} />
        </RenderView>
      </Router>
    </div>
  );
}

function RenderView(props) {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div style={{ marginTop: "8%" }}>
        <Container> {props.children}</Container>{" "}
      </div>
    </div>
  );
}

export default App;
