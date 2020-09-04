import React, { Component } from "react";
import { Avatar, Rate } from "antd";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../assets/constants/Routs";
import { useStoreState } from "../hooks/easyPeasy";
function MiniProfile() {
  const user = useStoreState((state) => state.auth.user);
  const history = useHistory();

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Avatar
          style={{ height: "80px", width: "80px" }}
          src={user?.photoUrl}
        ></Avatar>
      </div>

      <div style={{ marginTop: "5px", marginLeft: "5px" }}>
        <a
          href="#"
          onClick={() => {
            history.push(ROUTES.PROFILE);
          }}
        >
          {user.fullName}
        </a>
        <br></br>
        <Rate allowHalf defaultValue={2.5} disabled />
      </div>
    </div>
  );
}

export default MiniProfile;
