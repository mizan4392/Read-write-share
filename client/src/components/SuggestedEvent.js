import React, { Component } from "react";
import { Carousel } from "antd";
import EventView from "./EventView.tsx";

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
        <Carousel autoplay>
          <div>
            <EventView
              coverUrl="aa"
              profileUrl="nn"
              title="My Event 1"
              des="<p>sdasdfasfasf</p>"
            />
          </div>
          <div>
            <EventView
              coverUrl="aa"
              profileUrl="nn"
              title="My Event 2"
              des="<p>sdasdfasfasf</p>"
            />
          </div>
          <div>
            <EventView
              coverUrl="aa"
              profileUrl="nn"
              title="My Event 3"
              des="<p>sdasdfasfasf</p>"
            />
          </div>
          <div>
            <EventView
              coverUrl="aa"
              profileUrl="nn"
              title="My Event 4"
              des="<p>sdasdfasfasf</p>"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
