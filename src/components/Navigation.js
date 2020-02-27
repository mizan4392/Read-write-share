import React, { Component } from "react";
import {
  withStyles,
  fade,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Container,
  MenuItem,
  Menu
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import { Input, Icon } from "antd";
import { withRouter } from "react-router-dom";
import Notification from "./Notification";

const { Search } = Input;

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    width: '60%',
    alignSelf: 'center',
    marginLeft: '8%'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  Brand: {
    cursor: 'pointer'
  }

});

class Navigation extends Component {
  state = {
    openMenu: null,
    profileMenue: null
  };
  handelMenueOpen = e => {
    this.setState({ openMenu: e.currentTarget })
  }
  handelProfileOpen = e => {
    this.setState({ profileMenue: e.currentTarget })
  }
  handelProfileClose = e => {
    this.setState({ profileMenue: null })
  }
  handleClose = e => {
    this.setState({ openMenu: null })
  }
  render() {
    const { classes } = this.props;

    const renderCreateMenu = (<Menu
      id="simple-menu"
      anchorEl={this.state.openMenu}
      keepMounted
      open={Boolean(this.state.openMenu)}
      onClose={this.handleClose}
    >

      <MenuItem onClick={this.handleClose}>Post</MenuItem>
      <MenuItem onClick={this.handleClose}>Event</MenuItem>

    </Menu>)

    const renderProfileMenu = (<Menu
      id="simple-menu"
      anchorEl={this.state.profileMenue}
      keepMounted
      open={Boolean(this.state.profileMenue)}
      onClose={this.handelProfileClose}
    >

      <MenuItem onClick={() => {
        this.props.history.push('/profile')
      }}>Profile</MenuItem>
      <MenuItem onClick={this.handelProfileClose}>SignOut</MenuItem>

    </Menu>)

    return (
      <div className={classes.grow}>
        <AppBar position="fixed" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container>
            <Toolbar variant="dense" >
              <div style={{ marginRight: 'auto' }}>
                <h4 className={classes.Brand} onClick={() => {
                  this.props.history.push('/')
                }}>
                  RW&D
                </h4>


              </div>


              <div className={classes.search} >
                <Search
                  size="large"
                  placeholder="Search"
                  onSearch={value => console.log(value)}
                  enterButton
                  size="default "


                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop} style={{ marginLeft: 'auto' }}>

                <IconButton aria-label="show 4 new mails" color="inherit" style={{ fontSize: '1rem' }} onClick={this.handelMenueOpen}>
                  Create
                </IconButton>
                <div style={{ position: 'relative' }}>
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
            </Toolbar>
          </Container>
          {renderCreateMenu}
          {renderProfileMenu}
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Navigation));
