import React from "react";
import Post from "../components/Post";
import MiniProfile from "../components/MiniProfile";
import SuggestedFollower from "../components/SuggestedFollower";
import SuggestedEvent from "../components/SuggestedEvent";
import CreateEvent from "../components/modal/CreateEvent.component";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "65%" }}>
        <CreateEvent />
        <Post />
      </div>
      <div style={{ width: "35%", marginLeft: "2%" }}>
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
    </div>
  );
}
