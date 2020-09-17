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
    name: "Gift",
  },
  {
    id: 5,
    name: "Request",
  },
];

class EventProps {
  onChange: Function;
}

export default function EventType({ onChange }: EventProps) {
  function onEventChangeChange(evntName) {
    onChange(evntName);
  }
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a event type"
      onChange={onEventChangeChange}
      filterOption={(input, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {eventType.map((ev) => {
        return (
          <Option value={ev.name} key={ev.id}>
            {ev.name}
          </Option>
        );
      })}
    </Select>
  );
}
