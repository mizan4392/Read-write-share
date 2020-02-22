import React, { Component } from "react";
import {
  withStyles,
  fade,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Container
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import { Input, Icon } from "antd";

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
  SearcFeild: {
    // [theme.breakpoints.up("xl")]: {
    //   width:'850px'
    // },
    // [theme.breakpoints.up("lg")]: {
    //   width:'750px'
    // },
    // [theme.breakpoints.up("md")]: {
    //   width:'650px'
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width:'200px'
    // }
  }
});

class Navigation extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="fixed" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container>
          <Toolbar variant="dense" >
            <div style={{ marginRight: 'auto' }}>
              <Typography className={classes.title} variant="h6" noWrap>
                RW&D
            </Typography>
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
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                //aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
