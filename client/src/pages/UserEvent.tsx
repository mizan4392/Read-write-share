import { Spin } from "antd";
import React from "react";
import EventView from "../components/EventView";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";

export default function UserEvent() {
  const userEvent = useStoreState((state) => state.event.userEvent);
  const userEvtLod = useStoreState((state) => state.event.userEvtLod);
  return (
    <div style={{ textAlign: "center" }}>
      {userEvtLod ? (
        <Spin />
      ) : (
        <div>
          {userEvent.map((evt) => {
            return <EventView {...evt} />;
          })}
        </div>
      )}
    </div>
  );
}
