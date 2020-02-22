import React, { Component } from 'react'

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import { Card } from '@material-ui/core';


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
    return (
      <Card>
        <ReactQuill value={this.state.text} onChange={this.handleChange} style={{color:'black'}} />
      </Card>
     
    )
  }
}

export default CreatePost
