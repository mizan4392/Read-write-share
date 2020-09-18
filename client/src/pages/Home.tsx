import React from "react";

import MiniProfile from "../components/MiniProfile";
import SuggestedFollower from "../components/SuggestedFollower";

import CreatePost from "../components/modal/CreatePost.component";
import { useStoreState, useStoreActions } from "../hooks/easyPeasy";
import { Card, Space, Button } from "antd";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import CreateEvent from "../components/modal/CreateEvent.component";
import SuggestedEvent from "../components/SuggestedEvent";
import { Tabs } from "antd";
import { Typography } from "@material-ui/core";
import HomeEvent from "./HomeEvent.page";
const { TabPane } = Tabs;

export default function Home() {
  const user = useStoreState((state) => state.auth.user);
  const fetchGlobalEvt = useStoreActions(
    (action) => action.event.fetchGlobalEvt
  );

  const history = useHistory();

  function onTabChange(key) {
    console.log(key);
    if (key === "2") {
      fetchGlobalEvt();
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "65%" }}>
        <CreateEvent />
        <CreatePost />

        <h6>Page Mode</h6>
        <Tabs type="card" onChange={onTabChange}>
          <TabPane key="1" tab="POST">
            <Post />
          </TabPane>
          <TabPane key="2" tab="Event">
            <HomeEvent />
          </TabPane>
        </Tabs>
      </div>

      {user ? (
        <div
          style={{
            height: "200px",
            position: "fixed",
            right: "2%",
            width: "35%",
            marginLeft: "2%",
          }}
        >
          <Card>
            <MiniProfile />
          </Card>
          {/* <div style={{ marginTop: "25px" }}>
            <SuggestedFollower />
          </div> */}

          {/* <div style={{ marginTop: "35px" }}>
            <SuggestedEvent />
          </div> */}
        </div>
      ) : (
        <Card
          bordered
          style={{
            height: "200px",
            position: "fixed",
            right: "2%",
            width: "35%",
            marginLeft: "2%",
          }}
        >
          <h4>Your are not loggend in</h4>
          <p>
            please login to view people,profile,SuggestedEvent and many more!
          </p>

          <Space style={{ textAlign: "center" }}>
            <Button
              type="primary"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
            <Button
              type="primary"
              onClick={() => {
                history.push("/signup");
              }}
            >
              Signup
            </Button>
          </Space>
        </Card>
      )}
    </div>
  );
}
