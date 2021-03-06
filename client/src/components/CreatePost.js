import React, { Component } from "react";

import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { Card, withStyles, Container } from "@material-ui/core";
import { Button, notification } from "antd";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { pushPostData } from "../redux/actions/actions_push";
import { fetchAllPost } from "../redux/actions/action_fetch";

const styles = (theme) => ({
  Container: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "12%",
    },
  },
  Card: {
    background: "#c5cdd9",
    borderRadius: "20px",
    padding: "10px",
    maxWidth: "700px",
    minheight: "200px",
    marginLeft: "22%",
    [theme.breakpoints.down("sm")]: {
      //marginTop: '12%',
      marginLeft: "auto",
    },
  },
  Quill: {
    color: "black",
    minWidth: "200px",
    height: "100%",
    minheight: "400px",
    background: "white",
  },
  PostBtn: {
    width: "100%",
    background: "green",
    margin: "5px",
    color: "#fff",
    "&:hover": {
      background: "#fff",
      color: "green",
      border: "2px solid green",
    },
  },
});

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tags: [],
      newPostResponse: null,
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPostResponse !== this.state.newPostResponse) {
      this.setState({ newPostResponse: nextProps.newPostResponse }, () => {
        if (this.state.newPostResponse.status === "SUCCESS") {
          this.setState({ loading: false, text: "", tags: [] }, () => {
            this.openNotification();
            this.props.fetchAllPost();
          });
        } else {
          this.setState({ loading: false });
        }
      });
    }
  }
  openNotification = () => {
    var placement = "bottomRight";

    notification.info({
      message: "New Post Created Sucessfully",
      //   description:
      //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      //     ,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      placement,
      style: { backgroundColor: "#c7b300", color: "#fff" },
    });
  };

  handleChange = (value) => {
    this.setState({ text: value });
  };

  handleTageChange = (tags) => {
    this.setState({ tags });
  };
  handleClick = (e) => {
    const login =
      this.props.login && this.props.login.status === "SUCCESS" ? true : false;

    if (login) {
      let tags = "";
      this.state.tags.map((t) => {
        tags = tags + "-" + t;
      });

      let data = {
        body: this.state.text,
        tags: this.state.tags,
      };
      if (data.body.length > 0) {
        this.setState({ loading: true }, () => {
          this.props.pushPostData(data);
        });
      } else {
        alert("Please Write Something");
      }
    } else {
      this.props.history.push("/login");
    }
    e.preventDefault();
  };

  render() {
    // console.log(this.state)
    const { classes } = this.props;

    return (
      <Card className={classes.Card}>
        <h2>Wright A Post</h2>
        <div>
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
            className={classes.Quill}
          />
          <label>
            Please add some tag to the post (It will help us to boost your post)
          </label>
          <ReactTagInput
            tags={this.state.tags}
            onChange={this.handleTageChange}
            placeholder="Please add Tag and press enter"
          />
        </div>

        <div style={{ width: "100%" }}>
          <Button
            className={classes.PostBtn}
            onClick={this.handleClick}
            loading={this.state.loading}
          >
            Post
          </Button>
        </div>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ pushPostData, fetchAllPost }, dispatch);
}

function mapStateToProps({ login, newPostResponse }) {
  return { login, newPostResponse };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(CreatePost)));
