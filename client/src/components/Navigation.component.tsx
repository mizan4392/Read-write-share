import React, { Component } from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  MenuItem,
  Menu,
  Divider,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import {
  Input,
  Space,
  Button,
  Tooltip,
  Card,
  Typography,
  Popover,
  Avatar,
  List,
  Badge,
} from "antd";
import { withRouter } from "react-router-dom";
import Notification from "./Notification";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  signout,
  createEventModal,
  createPostModal,
} from "../redux/actions/action_misc";
import {
  NotificationOutlined,
  PlusOutlined,
  UserOutlined,
  FlagOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { styles } from "./MuiStyles/Navigation.style";

const { Search } = Input;
const { Text, Title } = Typography;

function Navigation(props: any) {
  const { classes } = props;

  const login = false;

  //   const renderCreateMenu = (
  //     <Menu
  //       id="simple-menu"
  //       // anchorEl={this.state.openMenu}
  //       keepMounted
  //       // open={Boolean(this.state.openMenu)}
  //       // onClose={this.handleClose}
  //     >
  //       <MenuItem>Post</MenuItem>
  //       <MenuItem>Event</MenuItem>
  //     </Menu>
  //   );

  //   const renderProfileMenu = login ? (
  //     <Menu
  //       id="simple-menu"
  //       // anchorEl={this.state.profileMenue}
  //       keepMounted
  //       // open={Boolean(this.state.profileMenue)}
  //       // onClose={this.handelProfileClose}
  //     >
  //       <MenuItem
  //         onClick={() => {
  //           history.push("/profile");
  //         }}
  //       >
  //         Profile
  //       </MenuItem>

  //       <MenuItem
  //         onClick={() => {
  //           // this.props.signout();
  //         }}
  //       >
  //         SignOut
  //       </MenuItem>
  //     </Menu>
  //   ) : (
  //     <Menu
  //       id="simple-menu"
  //       // anchorEl={this.state.profileMenue}
  //       // keepMounted
  //       // open={Boolean(this.state.profileMenue)}
  //       // onClose={this.handelProfileClose}
  //     >
  //       <MenuItem
  //         onClick={() => {
  //           history.push("/login");
  //         }}
  //       >
  //         Login
  //       </MenuItem>
  //       <MenuItem
  //         onClick={() => {
  //           history.push("/signup");
  //         }}
  //       >
  //         Signup
  //       </MenuItem>
  //     </Menu>
  //   );
  // const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";
  //   const renderMobileMenu = (
  //     <Menu
  //       // anchorEl={this.state.mobileMoreAnchorEl}
  //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //       id={mobileMenuId}
  //       keepMounted
  //       transformOrigin={{ vertical: "top", horizontal: "right" }}
  //       // open={isMobileMenuOpen}
  //       // onClose={this.handleMobileMenuClose}
  //     >
  //       <MenuItem>
  //         <IconButton aria-label="show 4 new mails" color="inherit">
  //           <Badge count={4} color="secondary">
  //             <MailIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Messages</p>
  //       </MenuItem>
  //       <MenuItem>
  //         <IconButton aria-label="show 11 new notifications">
  //           <Badge count={11} color="secondary">
  //             {/* <NotificationsIcon style={{ color: "#fff" }} /> */}
  //           </Badge>
  //         </IconButton>
  //         <p>Notifications</p>
  //       </MenuItem>
  //       <MenuItem
  //       // onClick={this.handleProfileMenuOpen}
  //       >
  //         <IconButton
  //           aria-label="account of current user"
  //           aria-controls="primary-search-account-menu"
  //           aria-haspopup="true"
  //           color="inherit"
  //           // onClick={this.handleMobileAccountCircleOpen}
  //         >
  //           <AccountCircle />
  //         </IconButton>
  //         <p>Profile</p>
  //       </MenuItem>
  //     </Menu>
  //   );

  const profilePopover = () => (
    <List itemLayout="horizontal" style={{ width: "150px" }} split={false}>
      <List.Item>
        <Space size="small" direction="horizontal">
          <UserOutlined />
          <Typography>Profile</Typography>
        </Space>
      </List.Item>
      <List.Item>
        <Space size="small" direction="horizontal">
          <FlagOutlined />
          <Typography>Saved</Typography>
        </Space>
      </List.Item>
      <List.Item>
        <Space size="small" direction="horizontal">
          <SettingOutlined />
          <Typography>Setting</Typography>
        </Space>
      </List.Item>
      <Divider></Divider>
      <List.Item>
        <Typography>Logout</Typography>
      </List.Item>
    </List>
  );

  const createPopover = () => (
    <List itemLayout="horizontal" style={{ width: "150px" }} split={false}>
      <List.Item
        style={{ cursor: "pointer" }}
        //   onClick={() => this.props.createPostModal(true)}
      >
        <Space size="small" direction="horizontal">
          <PlusOutlined />
          <Typography>Post</Typography>
        </Space>
      </List.Item>
      <List.Item
        //   onClick={() => this.props.createEventModal(true)}
        style={{ cursor: "pointer" }}
      >
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

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{
          background: "#fff",
        }}
      >
        <Container>
          <Toolbar
            variant="dense"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <h4
                className={classes.Brand}
                onClick={() => {
                  //   history.push("/");
                }}
              >
                RW&D
              </h4>
            </div>
            <div>
              <Search placeholder="Search..." size="small" />
            </div>
            <div>
              <div className={classes.sectionDesktop}>
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
              <div className={classes.sectionMobile}>
                <Button>moreIcon</Button>
              </div>
            </div>
            {/* <div style={{ marginRight: "auto" }}>
                
             
              <div className={classes.grow} />
              <div
                className={classes.sectionDesktop}
                style={{ marginLeft: "auto" }}
              >
                <IconButton
                  aria-label="show 4 new mails"
                  color="inherit"
                  style={{ fontSize: "1rem" }}
                  onClick={this.handelMenueOpen}
                >
                  Create
                </IconButton>
                <div>
                  <Notification />
                </div>

                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={this.handelProfileOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  // aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  color="inherit"
                  style={{ color: "red" }}
                  onClick={this.handleMobileMenuOpen}
                >
                  <MoreIcon className={classes.moreIcon} />
                </IconButton>
              </div>

              {renderMobileMenu} */}
          </Toolbar>
        </Container>
        {/* {renderCreateMenu}
        {renderProfileMenu} */}
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navigation);
