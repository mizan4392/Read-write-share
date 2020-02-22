import React, { Component } from 'react'
import Post from '../components/Post'
import CreatePost from '../components/CreatePost'

class NewsFeed extends Component {
    render() {
        return (
            <div style={{display:'flex',marginTop:'5%',justifyContent:'center'}}>
                <CreatePost />
                <Post />
            </div>
        )
    }
}
export default NewsFeed