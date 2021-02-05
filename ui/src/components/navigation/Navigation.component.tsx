import { Input, Space, Tooltip, Popover, Avatar, Button, Typography ,List, Divider} from "antd";
import { EditOutlined, FlagOutlined, LoginOutlined, LogoutOutlined, NotificationOutlined, PlusOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import React from "react";
import './navigation.css'
import { NavLink } from "react-router-dom";
const { Search } = Input
interface NavigationProps { }

const user = true
export const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <div className="flex-between">
      <div>
        <h4
          className="pointer"
          onClick={() => {
            // history.push("/");
          }}
        >
          RW&D
              </h4>
      </div>
      <div>
        <Search placeholder="Search..." size="small" style={{ textAlign: "inherit", marginTop: '15px' }} />
      </div>
      <div>
        <div className="sectionDesktop">
          <Space direction="horizontal" size="large">
            <Tooltip title="Create">
              <Popover
                content={createPopover()}
                placement="bottomLeft"
                trigger="click"
              >
                <PlusOutlined style={{ color: "#000" }} />
              </Popover>
            </Tooltip>
            <Tooltip title="Notification">
              <Popover
                content={notificationPopover()}
                placement="bottomLeft"
                trigger="click"
              >
                <NotificationOutlined style={{ color: "#000" }} />
              </Popover>
            </Tooltip>
            <Tooltip title="user">
              <Popover
                content={profilePopover()}
                placement="bottomLeft"
                trigger="click"
              >
                <Avatar
                  // src={`${API_BASE}/${userData?.photo}`}
                  size="large"
                  style={{ marginRight: 5, cursor: "pointer" }}
                />
              </Popover>
            </Tooltip>
          </Space>
        </div>
        <div className="sectionMobile">
          <Button>moreIcon</Button>
        </div>
      </div>

    </div>
  );
};


const createPopover = () => (
  <List itemLayout="horizontal" style={{ width: "150px" }} split={false}>
    <List.Item
      style={{ cursor: "pointer" }}
    // onClick={() => setCreatePostDia()}
    >
      <Space size="small" direction="horizontal">
        <PlusOutlined />
        <Typography>Post</Typography>
      </Space>
    </List.Item>
    <List.Item
      // onClick={() => setEventDia()}
      style={{ cursor: "pointer" }}>
      <Space size="small" direction="horizontal">
        <PlusOutlined />
        <Typography>Event</Typography>
      </Space>
    </List.Item>
  </List>
);


const notificationPopover = () => (
  <div>
    <List>
      {[1, 2, 3, 4].map((i) => {
        return (
          <List.Item>
            <Typography>Simple Notification</Typography>
          </List.Item>
        );
      })}
    </List>
  </div>
);

const profilePopover = () => (
  <List
    itemLayout="horizontal"
    style={{ width: "150px", cursor: "pointer" }}
    split={false}
  >
    {user ? (
      <>
        {" "}
        <List.Item>
          <Space size="small" direction="horizontal">
            <UserOutlined />
            <a>Profile</a>
            {/* <NavLink to={""}>Profile</NavLink> */}
          </Space>
        </List.Item>
        <List.Item>
          <Space size="small" direction="horizontal">
            <FlagOutlined />
            <a>Saved</a>
            {/* <NavLink to={""}>Saved</NavLink> */}
          </Space>
        </List.Item>
        <List.Item>
          <Space size="small" direction="horizontal">
            <SettingOutlined />
            <a>Setting</a>
            {/* <NavLink to={""}>Setting</NavLink> */}
          </Space>
        </List.Item>
        <Divider></Divider>
        <List.Item>
          <Button
            // onClick={() => {
            //   localStorage.removeItem("rwdtoken");

            //   openNotificationWithIcon(
            //     "success",
            //     "Logged Out SuccessFull",
            //     "Hope you will come back"
            //   );

            //   // history.push("/");
            //   setTimeout(() => {
            //     window.location.reload();
            //   }, 600);
            // }}
            style={{ border: "none" }}
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </List.Item>
      </>
    ) : (
      <>
        <List.Item>
          <Space>
            <LoginOutlined />
            <a>Login</a>
            {/* <NavLink to="/login">Login</NavLink> */}
          </Space>
        </List.Item>
        <List.Item>
          <Space>
            <EditOutlined />
            <a>Signup</a>
            {/* <NavLink to="/signup">Signup</NavLink> */}
          </Space>
        </List.Item>
      </>
    )}
  </List>
);
