import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles ,Avatar} from '@material-ui/core';
import {Button,Input } from 'antd'
import {pushSharedPostData} from '../redux/actions/actions_push'

const {TextArea} = Input

const styles = theme => {

}
class SharePost extends Component {

    state = {
        postForShare: null,
        sharedText:""
        
    }

   

    componentWillReceiveProps(nextProps) {
        if (nextProps.postForShare !== this.state.postForShare) {
            this.setState({ postForShare: nextProps.postForShare })
        }
    }

    handleShareDesTextChange = e =>{
        this.setState({sharedText:e.target.value})
    }

    handleSharePost = e=>{
        
        const shareData = {
            sharedes: this.state.sharedText,
            full_name: this.props.userData.credentials.full_name,
            sharedUserId: this.props.userData.credentials.userId,
            sharedUserImage: this.props.userData.credentials.imageUrl,
        }


        this.props.pushSharedPostData(this.state.postForShare,shareData)
  
    }
    render() {

        console.log(this.state)
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <Avatar src={this.props.userData && this.props.userData.credentials&& this.props.userData.credentials.imageUrl}></Avatar>
                    <TextArea rows={3} placeholder="Write Something about This Post" style={{ marginLeft: '10px' }} value={this.state.sharedText} onChange={this.handleShareDesTextChange}></TextArea>
                   
                </div>
                <div style={{textAlign:"center"}}>
                     <Button icon="share-alt" style={{marginTop:'2%',width:'70%',color:'#fff',background:'green'}} onClick={this.handleSharePost}></Button>
                </div>
               
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {

    return bindActionCreators({pushSharedPostData}, dispatch)

}

function mapStateToProps({ postForShare ,userData}) {
    return { postForShare ,userData}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SharePost))
