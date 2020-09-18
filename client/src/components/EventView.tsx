import React from "react";
import { Card, Avatar } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import SunEditor from "suneditor-react";
import { Divider } from "@material-ui/core";
const { Meta } = Card;

interface EventProps {
  coverUrl: string;
  profileUrl: string;
  title: string;
  des: string;
  type: string;
}

export default function EventView({
  coverUrl,
  profileUrl,
  title,
  des,
  type,
}: EventProps) {
  return (
    <>
      <Card
        style={{ width: type === "usr" ? 300 : 500, marginTop: "10px" }}
        cover={
          <img
            alt="example"
            src="https://img.freepik.com/free-photo/book-library-room_36325-102.jpg?size=626&ext=jpg"
            width={200}
            height={150}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar
              src={
                "https://images.unsplash.com/photo-1575709527142-a93ed587bb83?ixlib=rb-1.2.1&w=1000&q=80"
              }
              style={{ width: 120, height: 120 }}
            />
          }
          title={title}
          description={
            <SunEditor setContents={des} disable={true} showToolbar={false} />
          }
        />
      </Card>
    </>
  );
}
