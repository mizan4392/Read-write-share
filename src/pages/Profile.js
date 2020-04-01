import React, { Component } from 'react'
import { Container, Grid, Paper, withStyles, Avatar } from '@material-ui/core';
import ProfilePic from '../assets/Profile/sobuz.jpg'
import CoverPhoto from '../assets/Profile/cover.jpg'
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import {fetchUsersPost} from '../redux/actions/action_fetch'
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const { TabPane } = Tabs;



const styles = theme => ({
    root: {
        marginTop: '3.5%',

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
    }
});


class Profile extends Component {

    state = {
        value: 0,
        userData:null
    }

    componentDidMount(){
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
                                <img src={CoverPhoto} height="300px" width="100%" style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></img>
                                <div className={classes.Avatar}>
                                    <Avatar alt="Cindy Baker" src={ProfilePic} className={classes.large} />
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
                                        <div style={{ display: 'flex', color: 'black', justifyContent: 'center' }}>
                                            <div><p style={{ color: 'black' }}>4.5</p></div>
                                            <div>
                                                <p style={{ color: 'black' }}>star</p>
                                                <p style={{ color: 'black' }}>rating</p>
                                            </div>
                                        </div>
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
    return bindActionCreators({ fetchUsersPost}, dispatch);
}

function mapStateToProps({ userData}) {
    return {userData };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(Profile)));

