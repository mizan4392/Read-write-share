import React, { Component } from 'react'
import { withStyles, Card, CardHeader, Avatar, IconButton, CardContent, Container, CardActions, Divider } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography, Button, Comment, Modal, Spin } from 'antd';
import Page_Comment from './Comment';
import ReactHtmlParser from 'react-html-parser';
import DeleteIcon from '@material-ui/icons/Delete';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import { deletePost } from '../redux/actions/actions_push'
import { fetchAllPost } from '../redux/actions/action_fetch'

import { notification } from 'antd'

const styles = theme => ({

    Container: {
        //textAlign: 'center',
        //marginRight:'2px'
        // marginTop:'20%'
    },
    Card: {
        background: '#c5cdd9',
        borderRadius: '20px',
        padding: '10px',
        maxWidth: '700px',
        minheight: '200px',
        marginLeft: '22%',
        marginTop: '2%',
        [theme.breakpoints.down("sm")]: {
            //marginTop: '12%',
            marginLeft: 'auto',
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'red',
    },
});







class Post extends Component {
    state = {
        loading: true,
        allPosts: null,
        userData: null,
        deletePostResponse: null,
        deletePostId: "",
        loading:false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.allPosts !== this.state.allPosts) {
            this.setState({ allPosts: nextProps.allPosts })
        }

        if (nextProps.userData !== this.state.userData) {
            this.setState({ userData: nextProps.userData.credentials })
        }
        if (nextProps.deletePostResponse !== this.state.deletePostResponse) {
            this.setState({ deletePostResponse: nextProps.deletePostResponse }, () => {
                if (this.state.deletePostResponse.status === "SUCCESS") {
                    this.setState({ loading: false, text: "", tags: [] }, () => {
                        this.openNotification()
                        this.props.fetchAllPost()
                    })

                } else {
                    // alert('Login session Expeired please login again')
                    this.setState({ loading: false })
                }

            })
        }
    }
    handleDelete = () => {
        this.setState({loading:true},()=>{
            this.props.deletePost(this.state.deletePostId)
        })
        
    }
    confirm() {
        Modal.confirm({
            //   title: 'Confirm',
            icon: <InfoIcon />,
            content: 'Are You Realy Want To Delete This Post ?',
            okText: 'Delete',
            cancelText: 'Cencel',
            onOk: this.handleDelete

        });
    }

    openNotification = () => {

        var placement = 'bottomRight'

        notification.info({
            message: 'Post Deleted',
            //   description:
            //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
            //     ,
            onClick: () => {
                console.log('Notification Clicked!');
            },
            placement
            
        });
    };

    handleClick = postId => {
        console.log(postId)
        this.setState({ deletePostId: postId }, () => {
            this.confirm()
        })
    }

    render() {

        const { classes } = this.props



        console.log(this.state)



        const renderCard = this.props.allPosts && this.props.allPosts.map(post => {

            return (

                <Card className={classes.Card} key={post.postId}>

                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        action={
                            this.state.userData && this.state.userData.userId === post.userId ?
                             <div>
                                 {/* {this.state.loading ? <Spin/>:<div></div>} */}
                                <Button icon="delete" style={{ paddingBottom: '15px', color: 'red',border:'none'}} onClick={() => this.handleClick(post.postId)} loading={post.postId === this.state.deletePostId ? this.state.loading : false}> 
                                </Button>   
                             </div> : (<div></div>)
                        }
                        title={post.full_name}
                        subheader="September 14, 2016"
                        style={{ backgroundColor: 'white' }}
                    />

                    <CardContent style={{ backgroundColor: 'white' }}>

                        {ReactHtmlParser(post.body)}


                    </CardContent>
                    <Divider></Divider>
                    <CardActions style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button size="small" icon="like">
                                Like
                                </Button>
                        </div>

                        <div>
                            <Button size="small" icon="message">
                                Comment
                    </Button>
                        </div>

                        <div>
                            <Button size="small" icon="share-alt" >
                                Share
                    </Button>
                        </div>

                    </CardActions>
                    <Divider></Divider>
                    {/* <Page_Comment/> */}


                </Card>

            )


        })



        return (
            <Container>
                {renderCard}
            </Container>

        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deletePost, fetchAllPost }, dispatch);
}

function mapStateToProps({ allPosts, userData, deletePostResponse }) {
    return { allPosts, userData, deletePostResponse };
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(Post)));