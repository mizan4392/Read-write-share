import React from "react";
import { Card, Avatar, Space } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
import SunEditor from "suneditor-react";
import { Divider } from "@material-ui/core";
import EventOptions from "./Selects/EventOptions";
import { ViewDayOutlined } from "@material-ui/icons";
const { Meta } = Card;

let proPic =
  "https://images.unsplash.com/photo-1575709527142-a93ed587bb83?ixlib=rb-1.2.1&w=1000&q=80";

let coverPic =
  "https://img.freepik.com/free-photo/book-library-room_36325-102.jpg?size=626&ext=jpg";

interface EventProps {
  coverUrl: string;
  profileUrl: string;
  title: string;
  des: string;
  type: string;
  user: any;
}

export default function EventView({
  coverUrl,
  profileUrl,
  title,
  des,
  type,
  user,
}: EventProps) {
  function onOptChange(name) {}

  return (
    <>
      <Card
        style={{
          width: type === "usr" ? 300 : type === "home" ? 600 : 500,
          marginTop: "10px",
        }}
        cover={
          <img
            alt="example"
            src={coverUrl ? coverUrl : coverPic}
            width={200}
            height={150}
          />
        }
        actions={[
          // <SettingOutlined key="setting" />,
          // <FundViewOutlined />,
          <EventOptions onChange={(name) => onOptChange(name)} />,
        ]}
      >
        <Meta
          avatar={
            <Space direction="vertical">
              <Avatar
                src={profileUrl ? profileUrl : proPic}
                style={{ width: 120, height: 120 }}
              />
              <div>
                <span>
                  Creator: <a href="#">{user?.fullName}</a>
                </span>
              </div>
            </Space>
          }
          title={<a href="#">{title}</a>}
          description={
            <SunEditor
              setContents={des}
              disable={true}
              showToolbar={false}
              setDefaultStyle="height:200px"
            />
          }
        />
      </Card>
    </>
  );
}
