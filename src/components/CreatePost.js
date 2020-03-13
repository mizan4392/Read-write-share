import React, { Component } from 'react'

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import { Card, withStyles, Container } from '@material-ui/core';
import { Button } from 'antd';
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";


const styles = theme => ({
  Container: {
    textAlign: 'center',
    [theme.breakpoints.down("sm")]: {
      marginTop: '12%'
    }
  },
  Card: {
    background: '#c5cdd9',
    borderRadius: '20px',
    padding: '10px',
    maxWidth: '700px',
    minheight: '200px',
    marginLeft: '22%',
    [theme.breakpoints.down("sm")]: {
      //marginTop: '12%',
      marginLeft: 'auto',
    }
  },
  Quill: {
    color: 'black',
    minWidth: '200px',
    // height: '200px',
    //minheight:'200px',
    background: 'white'

  },
  PostBtn: {
    width: '100%',
    background: 'green',
    margin: '5px',
    color: '#fff',
    '&:hover': {
      background: '#fff',
      color: 'green',
      border: '2px solid green'
    }
  }
})


class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
       text: '' ,
       tags:[]
      } 
  
  }

  handleChange=(value)=> {
    this.setState({ text: value})
  }

  handleTageChange = tags=>{
    this.setState({tags})
  }
  handleClick = e=>{
    e.preventDefault()
    
  }

  render() {
    console.log(this.state)
    const { classes } = this.props
    return (

      <Container className={classes.Container}>
        <Card className={classes.Card}>
          <h2>Wright A Post</h2>
          <div>
          <ReactQuill value={this.state.text} onChange={this.handleChange} className={classes.Quill} />
          <label>Please add some tag to the post (It will help us to boost your post)</label>
          <ReactTagInput 
            tags={this.state.tags} 
            onChange={this.handleTageChange}
            placeholder="Please add Tag and press enter"
    />
          </div>
         
          <div style={{ width: '100%' }}>
            <Button className={classes.PostBtn} onClick={this.handleClick}>Post</Button>
          </div>
        </Card>
      </Container>




    )
  }
}

export default withStyles(styles)(CreatePost)
