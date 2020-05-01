import React, { Component } from 'react'
import { withStyles, Card, CardHeader, Avatar, IconButton, CardContent, Container, CardActions, Divider } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography, Button, Comment, Spin ,Modal,Input} from 'antd';
import Page_Comment from './Page_Comment';
import ReactHtmlParser from 'react-html-parser';
import DeleteIcon from '@material-ui/icons/Delete';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import { deletePost, likePost, unLikePost } from '../redux/actions/actions_push'
import { fetchAllPost, } from '../redux/actions/action_fetch'
import { getUserData } from '../redux/actions/actionAuth'
import { setPostIdForComment } from '../redux/actions/action_misc'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { notification } from 'antd'

const { TextArea } = Input;

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
    likeButton: {
        display: 'flex',
        flexDirection: 'column',

    }
});







class Post extends Component {
    state = {
        loading: true,
        allPosts: null,
        userData: null,
        deletePostResponse: null,
        deletePostId: "",
        loading: false,
        likePostResponse: null,
        likeButtonLoading: false,
        likeButtonId: "",
        unLikePostResponse: null,
        commentModal: false
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

        if (nextProps.likePostResponse !== this.state.likePostResponse) {
            this.setState({ likePostResponse: nextProps.likePostResponse }, () => {
                if (this.state.likePostResponse.status === "SUCCESS") {
                    this.setState({ likeButtonLoading: false }, () => {
                        this.props.getUserData()
                        this.props.fetchAllPost()
                    })


                } else {
                    // alert('Login session Expeired please login again')
                    this.setState({ likeButtonLoading: false })
                }

            })
        }

        if (nextProps.unLikePostResponse !== this.state.unLikePostResponse) {
            this.setState({ unLikePostResponse: nextProps.unLikePostResponse }, () => {
                if (this.state.unLikePostResponse.status === "SUCCESS") {
                    this.setState({ likeButtonLoading: false }, () => {
                        this.props.getUserData()
                        this.props.fetchAllPost()
                    })


                } else {
                    // alert('Login session Expeired please login again')
                    this.setState({ likeButtonLoading: false })
                }

            })
        }




    }
    handleDelete = () => {
        this.setState({ loading: true }, () => {
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

    handleLikeOnPost = postId => {

        // console.log(postId)
        this.setState({ likeButtonLoading: true, likeButtonId: postId }, () => {
            this.props.likePost(postId)
        })

    }
    handleUnLikeOnPost = postId => {
        this.setState({ likeButtonLoading: true, likeButtonId: postId }, () => {
            this.props.unLikePost(postId)
        })
    }

    handleCommentClick = postId => {
        this.setState({ commentModal: true }, () => {
            this.props.setPostIdForComment(postId)
        })

    }

    handleCommentModalClose = e => {
        this.setState({ commentModal: false })
    }
    render() {

        const { classes } = this.props
        dayjs.extend(relativeTime)


        const renderCard = this.props.allPosts && this.props.allPosts.map(post => {

            return (

                <Card className={classes.Card} key={post.postId}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar} src={post.userImage}>
                                R
                            </Avatar>
                        }
                        action={
                            this.state.userData && this.state.userData.userId === post.userId ?
                                <div>
                                    {/* {this.state.loading ? <Spin/>:<div></div>} */}
                                    <Button icon="delete" style={{ paddingBottom: '15px', color: 'red', border: 'none' }} onClick={() => this.handleClick(post.postId)} loading={post.postId === this.state.deletePostId ? this.state.loading : false}>
                                    </Button>
                                </div> : (<div></div>)
                        }
                        title={post.full_name}
                        subheader={dayjs(post.createdAt).fromNow()}
                        style={{ backgroundColor: 'white' }}
                    />

                    <CardContent style={{ backgroundColor: 'white' }}>

                        {ReactHtmlParser(post.body)}


                    </CardContent>
                    <Divider></Divider>

                    <CardActions style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>

                        <div>
                            {
                                this.props.userData && this.props.userData.likes &&
                                    this.props.userData.likes.find(like => like.postId === post.postId) ?
                                    <div className={classes.likeButton}>
                                        <span style={{ marginLeft: '10px', marginBottom: '10px' }}>{post.likeCount} Likes</span>
                                        <Button size="large" loading={post.postId === this.state.likeButtonId ? this.state.likeButtonLoading : false} icon="like" style={{ color: 'blue' }} onClick={() => this.handleUnLikeOnPost(post.postId)}>
                                            
                                        </Button>
                                    </div>

                                    :
                                    <div className={classes.likeButton}>
                                        <span style={{ marginLeft: '10px', marginBottom: '10px' }}>{post.likeCount} Likes</span>
                                        <Button size="large" icon="like" onClick={() => this.handleLikeOnPost(post.postId)} loading={post.postId === this.state.likeButtonId ? this.state.likeButtonLoading : false}>
                                            
                                </Button>
                                    </div>

                            }

                        </div>

                        <div>
                            <Button size="large" icon="message" style={{marginTop:'35px'}} onClick={() => this.handleCommentClick(post.postId)}>
                                
                            </Button>
                        </div>

                        <div>
                            <Button size="large" icon="share-alt" style={{marginTop:'35px'}} >
                               
                    </Button>
                        </div>

                    </CardActions>
                    <Divider></Divider>
                </Card>

            )


        })



        return (
            <Container>
                {renderCard}
                <Modal
                    visible={this.state.commentModal}
                    title="Comments"
                    onOk={this.handleCommentModalClose}
                    onCancel={this.handleCommentModalClose}
                    footer={null}
                >
                    <Page_Comment />
                </Modal>



            </Container>

        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deletePost, fetchAllPost, likePost, getUserData, unLikePost, setPostIdForComment }, dispatch);
}

function mapStateToProps({ allPosts, userData, deletePostResponse, likePostResponse, unLikePostResponse }) {
    return { allPosts, userData, deletePostResponse, likePostResponse, unLikePostResponse };
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(Post)));