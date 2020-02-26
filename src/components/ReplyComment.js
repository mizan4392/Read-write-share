import React, { Component } from 'react'
import { Container, withStyles, List, Avatar, Card, CardHeader, CardContent } from '@material-ui/core'

import ProfilePic from '../assets/Profile/sobuz.jpg'


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
        maxWidth: '90%',
        backgroundColor: '#fff',
        marginTop: '10px',
        marginLeft: '7%'
        // [theme.breakpoints.down('sm')]: {
        //     display: 'none'
        // },

    },
    listItem: {
        boxSizing: 'border-box',
        boxShadow: '20px',
        marginBottom: '2px',

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
    }

})


class ReplyComment extends Component {

    state = {
        open: false
    }





    render() {


        const { classes } = this.props

        const comments = <React.Fragment> <h3><strong style={{ background: '#e1eff2', padding: '5px', borderRadius: '10px', color: '#0e5ec2' }}>Mizanur Rahaman</strong> </h3> <p style={{ maxWidth: '550px', background: '#dbdbdb', padding: '5px', borderRadius: '10px' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha</p> </React.Fragment>

        const renderComments = [1, 2, 3, 4, 5].map(e => {

            return (
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar alt="Cindy Baker" src={ProfilePic} className={classes.large} />
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title={comments}
                        // subheader="September 14, 2016"
                        classes={{
                            root: classes.CardHeaderRoot
                        }}
                    />


                </Card>
            )


        })

        return (
            <React.Fragment>

                <List className={classes.root} >
                    {renderComments}
                </List>


            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ReplyComment)

