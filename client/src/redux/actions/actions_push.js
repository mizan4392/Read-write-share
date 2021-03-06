import * as TYPES from '../Types'
import { root, local } from '../../util/url'
import axios from 'axios';


export const unLikePost = async postId => {

    try {
        await axios
            .get(`${root}/post/${postId}/unlike`).then(res => {
                // setAuthorizationHeader(res.data.token)
            })

        let data = {
            status: "SUCCESS",
            message: "unLike is succesfull"
        };
        return {
            type: TYPES.UNLIKE_ON_POST,
            payload: data
        };

    } catch (error) {
        let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.UNLIKE_ON_POST,
            payload: data
        };
    }

}


export const likePost = async postId => {

    try {
        await axios
            .get(`${root}/post/${postId}/like`).then(res => {
                // setAuthorizationHeader(res.data.token)
            })

        let data = {
            status: "SUCCESS",
            message: "Like is succesfull"
        };
        return {
            type: TYPES.LIKE_ON_POST,
            payload: data
        };

    } catch (error) {
        let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.LIKE_ON_POST,
            payload: data
        };
    }

}


export const pushPostData = async (data) => {

    try {
        await axios
            .post(`${root}/post`, data).then(res => {
                // setAuthorizationHeader(res.data.token)

            })

        data = {
            status: "SUCCESS",
            message: "Post is succesfull"
        };
        return {
            type: TYPES.CREATE_NEW_POST,
            payload: data
        };

    } catch (error) {
        data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.CREATE_NEW_POST,
            payload: data
        };
    }
}

export const pushCommentData = async (postId, text) => {

    let data = {
        body: text
    }

    try {
        await axios
            .post(`${root}/post/${postId}/comment`, data).then(res => {
                // setAuthorizationHeader(res.data.token)

            })

        data = {
            status: "SUCCESS",
            message: "Comment is succesfull"
        };
        return {
            type: TYPES.COMMENT_ON_POST,
            payload: data
        };

    } catch (error) {
        data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.COMMENT_ON_POST,
            payload: data
        };
    }
}


export const pushSharedPostData = async (postData, sharedData) => {

    addAutorization()

    const sharePostData = {
        post: postData,
        sharedes: sharedData.sharedes,
        full_name: sharedData.full_name,
        sharedUserId: sharedData.sharedUserId,
        sharedUserImage: sharedData.sharedUserImage,
     
    }

    console.log(sharePostData)

   


    try {
        await axios
            .post(`${root}/post/${postData.postId}/share`, sharePostData).then(res => {
                // setAuthorizationHeader(res.data.token)

            })

       let data = {
            status: "SUCCESS",
            message: "Share is succesfull"
        };
        return {
            type: TYPES.SHARE_A_POST,
            payload: data
        };

    } catch (error) {
       let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.SHARE_A_POST,
            payload: data
        };
    }
}




export const deletePost = async (postId) => {
    let data = {}
    addAutorization()
    try {
        await axios
            .delete(`${root}/post/${postId}`)
            .then(() => {

            })

        data = {
            status: "SUCCESS",
            message: "Post is deleted succesfully"
        };

        return {
            type: TYPES.DELETE_NEW_POST,
            payload: data
        };

    } catch (error) {
        data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.DELETE_NEW_POST,
            payload: data
        };
    }
}
const addAutorization = () => {
    let token = localStorage.getItem("FBIdtoken");
    axios.defaults.headers.common['Authorization'] = token;
}



