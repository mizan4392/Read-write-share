import React, { Component } from 'react'
import { withStyles, List, Avatar, ListItem, ListItemAvatar, Typography,ListItemText } from '@material-ui/core'

import ProfilePic from '../assets/Profile/sobuz.jpg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Button, Input } from 'antd'
const { TextArea } = Input;
const styles = theme => ({

    container: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '600px'
        },
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center',

    },
    root: {
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: '10px',
        display: 'scroll',
        overflow: 'hidden'
        // [theme.breakpoints.down('sm')]: {
        //     display: 'none'
        // },

    },
    listItem: {
        boxSizing: 'border-box',
        boxShadow: '20px',
        marginBottom: '10px',

    },
    dotview: {
        [theme.breakpoints.up('lg')]: {
            display: 'none'
        },
    },
    productName: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    heading: {
        textAlign: 'center',
        marginBottom: '5px',
        textTransform: 'uppercase',
        backgroundColor: "#6e6969",
        color: "#fff",
        borderRadius: "15px",
        marginTop: "10px",
        margin: "5px",
        fontSize: "1.5rem",
        //paddingBottom: "5px"
    },
    Mobile: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    CardHeaderRoot: {
        padding: '5px'
    },
    UserName: {
        background: '#e1eff2',
        padding: '5px',
        borderRadius: '10px',
        color: '#0e5ec2',
        fontSize: '1rem'
    },
    commentBody: {
        maxWidth: '550px',
        background: '#dbdbdb',
        padding: '5px',
        borderRadius: '10px'

    },
    ReplyBtn: {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'blue',
        marginLeft: '10px',
        marginTop: '5px'
    }

})


class Page_Comment extends Component {

    state = {
        open: false,
        body:""
    }


    handleCommentTextChange = e =>{
        this.setState({body:e.target.value})
    }


    render() {
        dayjs.extend(relativeTime)

        const { classes } = this.props

        console.log(this.state)



        const renderComments = [1, 2, 3, 4, 5].map(e => {

            return (
                <ListItem alignItems="flex-start" key={e}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Ali Connors
                                </Typography>
                                <br></br>
                                <p>I'll be in your neighborhood doing errands this…</p>
                                
                            </React.Fragment>
                        }
                    />
                </ListItem>
            )


        })

        return (
            <React.Fragment>

                <div style={{ display: 'flex' }}>
                    <Avatar src={ProfilePic}></Avatar>
                    <TextArea rows={3} placeholder="Post a Comment" style={{ marginLeft: '10px' }} value={this.state.body} onChange={this.handleCommentTextChange}></TextArea>
                    <Button size="large" icon="message" style={{ marginLeft: '10px', maxWidth: '40px' }}></Button>
                </div>
                <List className={classes.root} >
                    {renderComments}
                </List>


            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Page_Comment)
