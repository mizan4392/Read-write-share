import React from 'react';


import Typography from '@material-ui/core/Typography';

import { Card, Container, CardContent, IconButton, Badge, Menu } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea'
// import Bell from '../../assets/images/bell.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class Notification extends React.Component {

    state = {
        notificationState: null
    }

    handleNotificationCard = e => {
        e.preventDefault()
        //this.setState({ notificationState: !this.state.notificationState })
        this.setState({ notificationState: e.currentTarget })
    }
    handelProfileClose = e => {
        this.setState({ notificationState: null })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.notificationState !== nextProps.notificationState) {
            this.setState({ notificationState: nextProps.notificationState })
        }
    }


    render() {

        console.log(this.state)


        const renderNotification = (

            <Menu
                id="simple-menu"
                anchorEl={this.state.notificationState}
                keepMounted
                open={Boolean(this.state.notificationState)}
                onClose={this.handelProfileClose}
            >
                <Card style={{ borderRadius: '10px 10px 0px 00px', width: '376px', height: '333px' }}>
                    <CardActionArea style={{ background: 'gray' }}>
                        <Typography gutterBottom variant="h5" component="h2" style={{ marginLeft: '10px', color: 'white' }}>Notifications</Typography>
                    </CardActionArea>
                    <Container>
                        <CardContent style={{ textAlign: 'center' }}>
                            {/* <img src={Bell} height='100px' width="auto"></img> */}
                        </CardContent>
                        <CardActionArea style={{ textAlign: 'center' }}>
                            <Typography>Your Notification is Empty!</Typography>
                        </CardActionArea>
                    </Container>
                </Card>
            </Menu>
        )

        return (

            <div>

                <div style={{ position: 'relative' }}>

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
                <div style={{ position: 'absolute', right: '6%', top: '90%' }}>
                    {renderNotification}
                </div>


            </div>


        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {},
        dispatch
    );
}


function mapStateToProps({ notificationState }) {
    return { notificationState };
}


export default connect(mapStateToProps, mapDispatchToProps)(Notification);