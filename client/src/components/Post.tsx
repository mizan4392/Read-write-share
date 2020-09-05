import React, { Component, useEffect } from "react";
import "./Post.css";
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

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactHtmlParser from "react-html-parser";
import SharePost from "./SharePost";
import {
  HeartOutlined,
  CommentOutlined,
  SendOutlined,
  SaveOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";
import SunEditor from "suneditor-react";

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
  const fetchAllPost = useStoreActions((action) => action.post.fetchAllPost);
  const allPostLoading = useStoreState((state) => state.post.allPostLoading);
  const allPosts = useStoreState((state) => state.post.allPosts);

  const getPostForLoggedInUser = useStoreActions(
    (action) => action.post.getPostForLoggedInUser
  );

  const user: any = useStoreState((state) => state.auth.user);

  const postLike = useStoreActions((action) => action.like.postLike);
  const setLikeRes = useStoreActions((action) => action.like.setLikeRes);
  const likeLoading = useStoreState((state) => state.like.likeLoading);
  const likeRes = useStoreState((state) => state.like.likeRes);

  useEffect(() => {
    if (likeRes) {
      const data: any = {
        userId: user?.id,
      };
      getPostForLoggedInUser(data);
      setLikeRes(false);
    }
  }, [likeRes]);

  useEffect(() => {
    if (user) {
      const data: any = {
        userId: user?.id,
      };
      getPostForLoggedInUser(data);
    } else {
      fetchAllPost();
    }
  }, [user]);

  function onLike(data) {
    let liked = false;
    data?.likes?.map((l) => {
      if (l?.post?.id === data?.id) {
        if (l.user.id === user?.id) {
          liked = true;
        }
      }
    });

    if (!liked) {
      const postData: any = {
        user: user?.id,
        post: data?.id,
      };

      postLike(postData);
    }
  }
  dayjs.extend(relativeTime);
  const renderCard = allPosts?.map((post) => {
    let totalLike = post?.likes?.length;
    let liked = false;
    post?.likes?.map((l) => {
      if (l?.post?.id === post?.id) {
        if (l.user.id === user?.id) {
          liked = true;
        }
      }
    });

    return (
      <Card
        title={
          <Meta
            avatar={<Avatar src={post?.photoUrl} />}
            title={
              <>
                <a href="#">{post.user.fullName}</a>
                <h6 style={{ fontSize: "10px" }}>
                  {dayjs(post?.createdAt).fromNow()}
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
        key={post.id}
        actions={[
          <Input
            placeholder="Post a comment"
            addonAfter={<Typography>Post</Typography>}
            style={{ padding: "10px" }}
          ></Input>,
        ]}
      >
        {ReactHtmlParser(post.body)}

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
                  liked ? (
                    <HeartFilled
                      style={{ color: "red", textAlign: "center" }}
                    />
                  ) : (
                    <HeartOutlined />
                  )
                }
                onClick={() => onLike(post)}
                loading={
                  likeLoading ? (likeLoading === post.id ? true : false) : false
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
          <div>
            <Tooltip title="Save">
              <Button
                // className={classes.btnBorder}
                icon={<SaveOutlined />}
              ></Button>
            </Tooltip>
          </div>
        </div>
        <strong style={{ paddingLeft: "10px" }}>{totalLike} likes</strong>
      </Card>
    );
  });

  return (
    <div>
      {allPostLoading ? (
        <Spin
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <div style={{ padding: "0 24px" }}>{renderCard}</div>
      )}

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
