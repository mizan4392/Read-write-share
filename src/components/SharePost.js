import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles ,Avatar} from '@material-ui/core';
import {Button,Input } from 'antd'

const {TextArea} = Input

const styles = theme => {

}
class SharePost extends Component {

    state = {
        postIdForShare: null,
        
    }

   

    componentWillReceiveProps(nextProps) {
        if (nextProps.postIdForShare !== this.state.postIdForShare) {
            this.setState({ postIdForShare: nextProps.postIdForShare })
        }
    }
    render() {

        console.log(this.state)
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <Avatar src={this.props.userData && this.props.userData.credentials&& this.props.userData.credentials.imageUrl}></Avatar>
                    <TextArea rows={3} placeholder="Write Something about This Post" style={{ marginLeft: '10px' }} value={this.state.body} onChange={this.handleCommentTextChange}></TextArea>
                   
                </div>
                <div style={{textAlign:"center"}}>
                     <Button icon="share-alt" style={{marginTop:'2%',width:'70%',color:'#fff',background:'green'}}></Button>
                </div>
               
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {

    return bindActionCreators({}, dispatch)

}

function mapStateToProps({ postIdForShare ,userData}) {
    return { postIdForShare ,userData}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SharePost))
