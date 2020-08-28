import React, { Component } from "react";
import { withStyles, Tooltip } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Typography,
  Button,
  Comment,
  Spin,
  Modal,
  Input,
  Card,
  Avatar,
  Space,
} from "antd";
import Page_Comment from "./Page_Comment";
import ReactHtmlParser from "react-html-parser";
import DeleteIcon from "@material-ui/icons/Delete";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import {
  deletePost,
  likePost,
  unLikePost,
} from "../redux/actions/actions_push";
import { fetchAllPost } from "../redux/actions/action_fetch";
import { getUserData } from "../redux/actions/actionAuth";
import {
  setPostIdForComment,
  setPostForShare,
} from "../redux/actions/action_misc";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { notification } from "antd";

import SharePost from "./SharePost";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  CommentOutlined,
  SendOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Meta } = Card;
const styles = (theme) => ({
  Container: {
    //textAlign: 'center',
    //marginRight:'2px'
    // marginTop:'20%'
  },
  Card: {
    background: "#c5cdd9",
    borderRadius: "20px",
    padding: "10px",
    maxWidth: "700px",
    minheight: "200px",
    marginTop: "2%",
    [theme.breakpoints.down("sm")]: {
      //marginTop: '12%',
      marginLeft: "auto",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
  likeButton: {
    display: "flex",
    flexDirection: "column",
  },

  btnBorder: {
    border: "none",
  },
});

function Post() {
  dayjs.extend(relativeTime);
  const renderCard = [1, 2, 3, 4].map((post) => {
    return (
      <Card
        title={
          <Meta
            avatar={<Avatar />}
            title={
              <>
                <a href="#">{"Mizan"}</a>
                <h6 style={{ fontSize: "10px" }}>
                  {/* {dayjs(post.createdAt).fromNow()} */}
                </h6>
              </>
            }
          />
        }
        extra={
          <a href="#">
            <MoreVertIcon style={{ color: "black" }} />
          </a>
        }
        style={{ marginBottom: "15px" }}
        key={post}
        actions={[
          <Input
            placeholder="Post a comment"
            addonAfter={<Typography>Post</Typography>}
            style={{ padding: "10px" }}
          ></Input>,
        ]}
      >
        {/* {ReactHtmlParser(post.body)} */}
        {"some post"}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "6%",
          }}
        >
          <Space size="middle">
            <Tooltip title="Love">
              <Button
                // className={classes.btnBorder}
                icon={<HeartOutlined />}
              ></Button>
            </Tooltip>
            <Tooltip title="Comment">
              <Button
                // className={classes.btnBorder}
                icon={<CommentOutlined />}
              ></Button>
            </Tooltip>
            <Tooltip title="Share">
              <Button
                // className={classes.btnBorder}
                icon={<SendOutlined />}
              ></Button>
            </Tooltip>
          </Space>
          <div>
            <Tooltip title="Save">
              <Button
                // className={classes.btnBorder}
                icon={<SaveOutlined />}
              ></Button>
            </Tooltip>
          </div>
        </div>
        <strong style={{ paddingLeft: "10px" }}> 10 likes</strong>
      </Card>
    );
  });

  return (
    <div>
      <div style={{ padding: "0 24px" }}>{renderCard}</div>

      <Modal
      // visible={this.state.commentModal}
      // title="Comments"
      // onOk={this.handleCommentModalClose}
      // onCancel={this.handleCommentModalClose}
      // footer={null}
      >
        <Page_Comment />
      </Modal>

      <Modal
        // visible={this.state.shareModal}
        title="Share This Post"
        // onOk={this.handleSharePost}
        // onCancel={this.handleshareModalClose}
        footer={null}
      >
        <SharePost />
      </Modal>
    </div>
  );
}

export default Post;
