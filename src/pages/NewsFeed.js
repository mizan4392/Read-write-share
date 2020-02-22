import React, { Component } from 'react'
import Post from '../components/Post'
import CreatePost from '../components/CreatePost'
import { withStyles } from '@material-ui/core'


const styles = theme =>({
    Root:{
        display:'flex',
        marginTop:'5%',
        alignItems:'center',
        flexDirection:'column',
        color:'black'
    }
})



class NewsFeed extends Component {



    render() {
        const {classes}  = this.props
        return (
            <div className={classes.Root}>
                <CreatePost />
                <Post /> 
            
            </div>
        )
    }
}


export default withStyles(styles)(NewsFeed)