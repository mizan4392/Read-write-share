import React, { Component, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  withStyles,
  Avatar,
  Tooltip,
  Box,
  Typography,
} from "@material-ui/core";

import ProfilePic from "../assets/Profile/sobuz.jpg";
import CoverPhoto from "../assets/Profile/cover.jpg";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post.tsx";
import { fetchUsersPost } from "../redux/actions/action_fetch";
import { Tabs } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Rating from "@material-ui/lab/Rating";

import { useStoreState, useStoreActions } from "../hooks/easyPeasy";
import UserPosts from "../components/userPosts.component";
import SavedPost from "./SavedPost.page";
import SharedPost from "./SharedPost.page";
import UserEvent from "./UserEvent";

const { TabPane } = Tabs;

const styles = (theme) => ({
  root: {
    marginTop: "4%",
  },
  Container: {
    padding: "20px",
    paddingTop: "0px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    position: "relative",
  },
  Avatar: {
    position: "absolute",
    left: "8%",
    top: "70%",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "20%",
      top: "70%",
    },
  },
  CoverPhotoUplodeLabel: {
    position: "absolute",
    top: "0",
    right: "1px",
    marginRight: "10px",
    border: "1px solid #ccc",
    display: "inline-block",
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "#000",
    marginTop: "10px",
  },
  profilePhotoUplodeLabel: {
    position: "absolute",
    bottom: "0",
    top: "85%",
    marginRight: "10px",
    // border: '1px solid #ccc',
    display: "inline-block",
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "transperent",
    borderRadius: "10px",
  },
});

function Profile(props) {
  const user = useStoreState((state) => state.auth.user);
  const fetchUserPosts = useStoreActions(
    (action) => action.post.fetchUserPosts
  );

  const { fetchSavedPost } = useStoreActions((action) => action.save);
  const { fetchshareedPost } = useStoreActions((action) => action.share);
  const { setTabKey } = useStoreActions((action) => action.misc);
  const fetchUserEvent = useStoreActions(
    (action) => action.event.fetchUserEvent
  );
  const { classes } = props;

  useEffect(() => {
    fetchUserPosts();
  }, []);

  function onTabChange(key) {
    setTabKey(key);
    if (key === "4") {
      fetchSavedPost();
    }
    if (key === "3") {
      fetchshareedPost();
    }
    if (key === "2") {
      fetchUserEvent();
    }
  }
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2} className={classes.Container}>
          <Grid item xs={12}>
            <div style={{ position: "relative" }}>
              <div>
                <img
                  src={CoverPhoto}
                  height="300px"
                  width="100%"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                ></img>
                <Tooltip title="Uplode Cover Photo">
                  <label className={classes.CoverPhotoUplodeLabel}>
                    <CameraAltIcon style={{ color: "#fff" }} />
                    <input type="file" style={{ display: "none" }}></input>
                  </label>
                </Tooltip>
              </div>

              <div className={classes.Avatar}>
                <Avatar
                  alt="Cindy Baker"
                  src={ProfilePic}
                  className={classes.large}
                />
                <Tooltip title="Uplode Profile Photo">
                  <label className={classes.profilePhotoUplodeLabel}>
                    <CameraAltIcon style={{ color: "#000" }} />
                    <input type="file" style={{ display: "none" }}></input>
                  </label>
                </Tooltip>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div style={{ textAlign: "center", color: "black" }}>
              <div style={{ marginTop: "28%" }}>
                <div>
                  <span style={{ color: "black" }}>{user?.fullName}</span>
                </div>
                <div>
                  <label style={{ color: "black" }}>Phone: {user?.phone}</label>
                </div>
                <div>
                  <label style={{ color: "black" }}>
                    Address: {user?.address}
                  </label>
                </div>
                <div>
                  <label style={{ color: "black" }}>Email:{user?.email}</label>
                </div>

                <div style={{ textAlign: "center" }}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rating</Typography>
                    <Rating name="disabled" value={10} disabled />
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Tabs
              defaultActiveKey="1"
              onChange={onTabChange}
              style={{ padding: "10px" }}
              type="card"
            >
              <TabPane tab="POST" key="1">
                <UserPosts />
              </TabPane>
              <TabPane tab="EVENTS" key="2">
                <UserEvent />
              </TabPane>
              <TabPane tab="SHARED" key="3">
                <SharedPost />
              </TabPane>
              <TabPane tab="Saved" key="4">
                <SavedPost />
              </TabPane>
            </Tabs>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(Profile);
