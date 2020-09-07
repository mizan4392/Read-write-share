import React from "react";

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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  HeartOutlined,
  CommentOutlined,
  SendOutlined,
  SaveOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";
import dayjs from "dayjs";
import { Tooltip, withStyles } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
const { TextArea } = Input;
const { Meta } = Card;
const styles: any = (theme) => ({
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

interface PostProps {
  post: any;
  liked: boolean;
  onLike: Function;
  likeLoading: boolean;
  totalLike: number;
}
function RenderPost(props: PostProps) {
  return (
    <Card
      title={
        <Meta
          avatar={<Avatar src={props.post?.photoUrl} />}
          title={
            <>
              <a href="#">{props?.post?.user?.fullName}</a>
              <h6 style={{ fontSize: "10px" }}>
                {/* {dayjs(props?.post?.createdAt).fromNow()} */}
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
      key={props.post?.id}
      actions={[
        <Input
          placeholder="Post a comment"
          addonAfter={<Typography>Post</Typography>}
          style={{ padding: "10px" }}
        ></Input>,
      ]}
    >
      {ReactHtmlParser(props.post?.body)}

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
              icon={
                props.liked ? (
                  <HeartFilled style={{ color: "red", textAlign: "center" }} />
                ) : (
                  <HeartOutlined />
                )
              }
              onClick={() => props.onLike(props.post)}
              loading={
                props.likeLoading
                  ? props.likeLoading === props.post?.id
                    ? true
                    : false
                  : false
              }
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
        {/* <div>
          <Tooltip title="Save">
            <Button
              // className={classes.btnBorder}
              icon={<SaveOutlined />}
              onClick={() => props.onSavePost(props?.post)}
              loading={
                props?.saveLoading
                  ? props.saveLoading === props?.post.id
                    ? true
                    : false
                  : false
              }
            ></Button>
          </Tooltip>
        </div> */}
      </div>
      <strong style={{ paddingLeft: "10px" }}>{props.totalLike} likes</strong>
    </Card>
  );
}

export default withStyles(styles)(RenderPost);
