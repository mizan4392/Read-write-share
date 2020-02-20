import React, { Component } from 'react'
import { withStyles, Card, CardHeader, Avatar, IconButton, CardContent } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { NavLink } from 'react-router-dom'
import { Typography } from 'antd';
const styles = theme => ({
    root: {
        maxWidth: 345,
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
    };

    render() {

        const { classes } = this.props
        return (
            <div style={{ marginTop: '20%', color: 'black' }}>

                <Card className={classes.root}>

                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                             </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings" >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
                    </CardContent>
                </Card>
            </div>

        )
    }
}


export default withStyles(styles)(Post)