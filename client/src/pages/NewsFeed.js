import React, { Component } from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import { withStyles, Container } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { fetchAllPost } from "../redux/actions/action_fetch";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  // Root: {
  //   display: "flex",
  //   marginTop: "5%",
  //   flexDirection: "column",
  //   color: "black",
  // },
});

class NewsFeed extends Component {
  componentDidMount() {
    this.props.fetchAllPost();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        {/* <CreatePost /> */}
        <Post />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllPost }, dispatch);
}

function mapStateToProps({ allPosts }) {
  return { allPosts };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(NewsFeed)));
