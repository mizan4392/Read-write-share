import React, { Component } from 'react'
import { withStyles, List, Avatar, ListItem, ListItemAvatar, Typography,ListItemText } from '@material-ui/core'

import ProfilePic from '../assets/Profile/sobuz.jpg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Button, Input } from 'antd'
import { bindActionCreators } from 'redux'
import {pushCommentData} from '../redux/actions/actions_push'
import { fetchPostComments } from '../redux/actions/action_fetch'
import { connect } from 'react-redux'
const { TextArea } = Input;
const styles = theme => ({

   
    root: {
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: '10px',
        display: 'scroll',
        overflow: 'hidden'
    

    },

})


class Page_Comment extends Component {

    state = {
        open: false,
        body:"",
        postIdForComment:null,
        commentButtonLoading:false,
        postCommentResponse:null,
        postComments:null,
        userData:null
    }

 

    componentWillReceiveProps(nextProps){
        
        if(nextProps.postIdForComment !== this.state.postIdForComment){
            this.setState({postIdForComment:nextProps.postIdForComment},()=>{
                this.props.fetchPostComments(this.state.postIdForComment)
            })
        }

        if(nextProps.postComments !== this.state.postComments){
            this.setState({postComments:nextProps.postComments})
        }

        if (nextProps.postCommentResponse !== this.state.postCommentResponse) {
            this.setState({ postCommentResponse: nextProps.postCommentResponse }, () => {
                if (this.state.postCommentResponse.status === "SUCCESS") {
                    this.setState({ commentButtonLoading: false ,body:""}, () => {
                        this.props.fetchPostComments(this.state.postIdForComment)
                    })


                } else {
                    // alert('Login session Expeired please login again')
                    this.setState({ commentButtonLoading: false })
                }

            })
        }

    }


    handleCommentTextChange = e =>{
        this.setState({body:e.target.value})
    }

    handleCommentOnPost = e =>{
         const {body,postIdForComment} = this.state
         this.setState({commentButtonLoading:true},()=>{
            this.props.pushCommentData(postIdForComment,body)
         })
        
    }


    render() {
        dayjs.extend(relativeTime)

        const { classes } = this.props

        // userData.credentials
        const renderComments = this.state.postComments && this.state.postComments.map(comment => {

            return (
                <ListItem alignItems="flex-start" key={comment.commentId}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={comment.userImage} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={comment.full_name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                   {comment.body}
                                </Typography>
                                <br></br>
                        {dayjs(comment.createdAt).fromNow()}
                                
                            </React.Fragment>
                        }
                    />
                </ListItem>
            )


        })

        return (
            <React.Fragment>

                <div style={{ display: 'flex' }}>
                    <Avatar src={this.props.userData && this.props.userData.credentials&& this.props.userData.credentials.imageUrl}></Avatar>
                    <TextArea rows={3} placeholder="Post a Comment" style={{ marginLeft: '10px' }} value={this.state.body} onChange={this.handleCommentTextChange}></TextArea>
                    <Button size="large" icon="message" style={{ marginLeft: '10px', maxWidth: '40px' }} onClick={this.handleCommentOnPost} loading={this.state.commentButtonLoading}></Button>
                </div>
                <List className={classes.root} >
                    {renderComments}
                </List>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({pushCommentData,fetchPostComments},dispatch)

}

function mapStateToProps({postIdForComment,postCommentResponse,postComments,userData}){
    return{postIdForComment,postCommentResponse,postComments,userData}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (withStyles(styles)(Page_Comment))
