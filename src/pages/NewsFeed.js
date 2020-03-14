import React, { Component } from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import { withStyles, Container } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { fetchAllPost } from "../redux/actions/action_fetch";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  Root: {
    display: "flex",
    marginTop: "5%",
    alignItems: "center",
    flexDirection: "column",
    color: "black"
  }
});

class NewsFeed extends Component {
  state = {
    allPosts: null
  };

  componentDidMount() {
    this.props.fetchAllPost();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allPosts !== this.state.allPosts) {
      this.setState({ allPosts: nextProps.allPosts });
    }
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.allPosts);
    const renderPost =
      this.props.allPosts &&
      this.props.allPosts.map(post => {
        return (
          <div style={{ marginTop: "1%",width:'100%',maxWidth:'700px' ,padding:'10px',marginLeft: '3%',}} key={post.postId}>
            {" "}
            <Post post={post} key={post.postId} />{" "}
          </div>
        );
      });

    return (
      <Container>
        <div className={classes.Root}>
          <CreatePost />

          {renderPost}
        </div>
      </Container>
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
