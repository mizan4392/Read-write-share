import React, { Component } from 'react'
import { Container, Grid, Paper, withStyles, Avatar, Tooltip ,Box,Typography} from '@material-ui/core';

import ProfilePic from '../assets/Profile/sobuz.jpg'
import CoverPhoto from '../assets/Profile/cover.jpg'
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { fetchUsersPost } from '../redux/actions/action_fetch'
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Rating from '@material-ui/lab/Rating';

const { TabPane } = Tabs;



const styles = theme => ({
    root: {
        marginTop: '4%',

    },
    Container: {
        padding: '20px',
        paddingTop: '0px'
    },
    paper: {

        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {
        width: theme.spacing(23),
        height: theme.spacing(23),
        position: 'relative'
    },
    Avatar: {
        position: 'absolute',
        left: '8%',
        top: '70%',
        [theme.breakpoints.down("sm")]: {
            position: 'absolute',
            left: '20%',
            top: '70%',
        }
    },
    CoverPhotoUplodeLabel: {
        position: 'absolute',
        top: '0',
        right: '1px',
        marginRight: '10px',
        border: '1px solid #ccc',
        display: 'inline-block',
        padding: "6px 12px",
        cursor: "pointer",
        backgroundColor: '#000',
        marginTop: '10px'
    },
    profilePhotoUplodeLabel: {
        position: 'absolute',
        bottom: '0',
        top: '85%',
        marginRight: '10px',
        // border: '1px solid #ccc',
        display: 'inline-block',
        padding: "6px 12px",
        cursor: "pointer",
        backgroundColor: 'transperent',
        borderRadius: '10px'
    }
});


class Profile extends Component {

    state = {
        value: 0,
        userData: null
    }

    componentDidMount() {
        this.props.fetchUsersPost()
    }

    handleChange = (event, newValue) => {
        // setValue(newValue);
        this.setState({ value: newValue })
    };

    render() {
        const { classes } = this.props
        const { value } = this.state
        return (
            <div className={classes.root}>
                <Container>
                    <Grid container spacing={2} className={classes.Container}>
                        <Grid item xs={12}>
                            <div style={{ position: 'relative' }}>
                                <div >
                                    <img src={CoverPhoto} height="300px" width="100%" style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center', position: 'relative' }}></img>
                                    <Tooltip title="Uplode Cover Photo">
                                        <label className={classes.CoverPhotoUplodeLabel} >
                                            <CameraAltIcon style={{ color: '#fff' }} />
                                            <input type="file" style={{ display: 'none' }}></input>
                                        </label>
                                    </Tooltip>


                                </div>


                                <div className={classes.Avatar}>
                                    <Avatar alt="Cindy Baker" src={ProfilePic} className={classes.large} />
                                    <Tooltip title="Uplode Profile Photo">
                                        <label className={classes.profilePhotoUplodeLabel} >
                                            <CameraAltIcon style={{ color: '#000' }} />
                                            <input type="file" style={{ display: 'none' }}></input>
                                        </label>
                                    </Tooltip>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={4}>

                            <div style={{ textAlign: 'center', color: 'black' }}>
                                <div style={{ marginTop: '28%' }}>
                                    <div>
                                        <span style={{ color: 'black' }}>Md Mizanur Rahaman</span>
                                    </div>
                                    <div>
                                        <label style={{ color: 'black' }}>Phone: 01830791133</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'black' }}>Address: 57/ka,Leakcircus Kolabagan </label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'black' }}>Email:dev.mizan4392@gmail.com </label>
                                    </div>

                                    <div style={{ textAlign: 'center' }}>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Typography component="legend">Rating</Typography>
                                            <Rating name="disabled" value={10} disabled />
                                        </Box>
                                    </div>
                                </div>

                            </div>

                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Paper square>
                                <Tabs defaultActiveKey="1" >
                                    <TabPane tab="YOUR POST" key="1">
                                        <Post />
                                    </TabPane>
                                    <TabPane tab="YOUR EVENTS" key="2">
                                        Content of Tab Pane 2
                                    </TabPane>
                                    <TabPane tab="YOUR SHARE" key="3">
                                        Content of Tab Pane 3
                                    </TabPane>
                                </Tabs>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUsersPost }, dispatch);
}

function mapStateToProps({ userData }) {
    return { userData };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(Profile)));

