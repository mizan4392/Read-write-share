import React from "react";
import EventView from "../components/EventView";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";

export default function HomeEvent() {
  const userEvent = useStoreState((state) => state.event.userEvent);
  console.log(userEvent);
  return userEvent.map((evt) => {
    return <EventView {...evt} type="home" />;
  });
}
