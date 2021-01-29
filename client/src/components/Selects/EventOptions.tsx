import React from "react";
import { Select } from "antd";
const { Option } = Select;
export const eventType = [
  {
    id: 1,
    name: "Interested",
  },
  {
    id: 2,
    name: "Request",
  },
];

class EventProps {
  onChange: Function;
}

export default function EventOptions({ onChange }: EventProps) {
  function onEventChangeChange(evntName) {
    onChange(evntName);
  }
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select an option"
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
