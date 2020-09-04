import React from "react";
import Post from "../components/Post.tsx";
import MiniProfile from "../components/MiniProfile";
import SuggestedFollower from "../components/SuggestedFollower";
import SuggestedEvent from "../components/SuggestedEvent";
import CreateEvent from "../components/modal/CreateEvent.component";
import CreatePost from "../components/modal/CreatePost.component";
import { useStoreState } from "../hooks/easyPeasy";
import { Card, Space, Button } from "antd";
import { useHistory } from "react-router-dom";
export default function Home() {
  const user = useStoreState((state) => state.auth.user);

  const history = useHistory();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "65%" }}>
        <CreateEvent />
        <CreatePost />
        <Post />
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
          <div>
            <MiniProfile />
          </div>
          <div style={{ marginTop: "25px" }}>
            <SuggestedFollower />
          </div>

          <div style={{ marginTop: "35px" }}>
            <SuggestedEvent />
          </div>
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
