import React, { Component } from 'react'
import { withStyles, Card, CardHeader, Avatar, IconButton, CardContent, Container } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from 'antd';
const styles = theme => ({

    Container:{
        //textAlign: 'center',
        //marginRight:'2px'
       // marginTop:'20%'
    },
    Card: {

    background: '#c5cdd9',
    borderRadius: '20px',
    padding: '10px',
    maxWidth: '700px',
    minheight:'200px',
    //marginRight:'0%',
     marginTop: '2%',
    [theme.breakpoints.down("sm")]: {
      //marginTop: '12%',
      marginLeft:'auto',
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
    };

    render() {

        const { classes } = this.props
        return (
            <Container>

                <Card className={classes.Card}>

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
                        style={{backgroundColor:'white'}}
                    />

                    <CardContent style={{backgroundColor:'white'}}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>



        )
    }
}


export default withStyles(styles)(Post)