import React, { Component } from "react";
import { Avatar, Rate } from "antd";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../assets/constants/Routs";
class MiniProfile extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <Avatar
            style={{ height: "80px", width: "80px" }}
            src="https://instagram.fcgp1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92438062_2639107703024594_7205110301090381824_n.jpg?_nc_ht=instagram.fcgp1-1.fna.fbcdn.net&_nc_ohc=_WvLEHsg_hMAX9Vf3p-&oh=2cd8e0836b2f596f80c19ce3c71c1705&oe=5F5EE8EC"
          ></Avatar>
        </div>

        <div style={{ marginTop: "5px", marginLeft: "5px" }}>
          <a
            href="#"
            onClick={() => {
              this.props.history.push(ROUTES.PROFILE);
            }}
          >
            Md Mizanur Rahaman
          </a>
          <br></br>
          <Rate allowHalf defaultValue={2.5} disabled />
        </div>
      </div>
    );
  }
}

export default withRouter(MiniProfile);
