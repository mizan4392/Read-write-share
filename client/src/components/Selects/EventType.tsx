import React from "react";
import { Select } from "antd";
const { Option } = Select;
export const eventType = [
  {
    id: 1,
    name: "Sell",
  },
  {
    id: 2,
    name: "Borrow",
  },
  {
    id: 3,
    name: "Donate",
  },
  {
    id: 4,
    name: "request",
  },
];

export default function EventType() {
  function onChange() {}
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a event type"
      onChange={onChange}
      filterOption={(input, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {eventType.map((ev) => {
        return (
          <Option value={ev.id} key={ev.id}>
            {ev.name}
          </Option>
        );
      })}
    </Select>
  );
}
