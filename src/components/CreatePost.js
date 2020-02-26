import React, { Component } from 'react'

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import { Card, withStyles, Container } from '@material-ui/core';


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

  }
})


class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    const { classes } = this.props
    return (

      <Container className={classes.Container}>
        <Card className={classes.Card}>
          <h2>Wright A Post</h2>
          <ReactQuill value={this.state.text} onChange={this.handleChange} className={classes.Quill} />
        </Card>
      </Container>




    )
  }
}

export default withStyles(styles)(CreatePost)
