import React from "react";

import Typography from "@material-ui/core/Typography";

import {
  Card,
  Container,
  CardContent,
  IconButton,
  Badge,
  ClickAwayListener
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";

import NotificationsIcon from "@material-ui/icons/Notifications";

class Notification extends React.Component {
  state = {
    notificationState: false
  };

  handleNotificationCard = e => {
    e.preventDefault();
    this.setState({ notificationState: !this.state.notificationState });
  };

  handleClickAway = e => {
    this.setState({ notificationState: false });
  };

  render() {
    const Bell =
      "http://getdrawings.com/free-icon/bell-notification-icon-53.png";
    const renderNotification = this.state.notificationState ? (
      <Card
        style={{
          borderRadius: "10px 10px 0px 00px",
          width: "376px",
          height: "333px"
        }}
      >
        <CardActionArea style={{ background: "gray" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ marginLeft: "10px", color: "white" }}
          >
            Notifications
          </Typography>
        </CardActionArea>
        <Container>
          <CardContent style={{ textAlign: "center" }}>
            <img src={Bell} height="100px" width="auto"></img>
          </CardContent>
          <CardActionArea style={{ textAlign: "center" }}>
            <Typography>Your Notification is Empty!</Typography>
          </CardActionArea>
        </Container>
      </Card>
    ) : null;

    return (
      <div>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <div style={{ position: "relative" }}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={this.handleNotificationCard}
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
            <div style={{ position: "absolute", right: "6%", top: "90%" }}>
              {renderNotification}
            </div>
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

export default Notification;
