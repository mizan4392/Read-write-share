import React, { Component } from "react";
import { Carousel } from "antd";
import EventView from "./EventView";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default class SuggestedEvent extends Component {
  render() {
    return (
      <div>
        <p style={{ color: "#cccccc" }}>Suggestions For You(Event)</p>
        <Carousel autoplay nextArrow>
          <div>
            <EventView />
          </div>
          <div>
            <EventView />
          </div>
          <div>
            <EventView />
          </div>
          <div>
            <EventView />
          </div>
        </Carousel>
      </div>
    );
  }
}
