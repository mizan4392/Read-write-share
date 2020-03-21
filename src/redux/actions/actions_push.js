import * as TYPES from '../Types'
import { root, local } from '../../util/url'
import axios from 'axios';

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
const addAutorization = ()=>{
    let token = localStorage.getItem("FBIdtoken");
    axios.defaults.headers.common['Authorization'] = token;
}



