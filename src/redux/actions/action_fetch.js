import * as TYPES from '../Types'
import * as ENDPOINTS from '../../util/endPoints'
import { root, local } from '../../util/url'
import {fetchDataReturnPromise} from './index'
import axios from 'axios'


export const fetchAllPost =async ()=>{

    return fetchDataReturnPromise(ENDPOINTS.POSTS,TYPES.FETCH_ALL_POST)
}

export const fetchPostComments =async (postId)=>{

    let res = {
        postId:postId
    }

    let data = []
    console.log('im fetch')

    console.log("aaaa",postId)
    try {
        await axios
            .get(`${root}/post/${postId}/getComment`,res).then(res => {
                console.log("resData",res)
               data = res.data
            })
        return {
            type: TYPES.FETCH_POST_COMMENT,
            payload: data
        };

    } catch (error) {

        console.log(error)
       let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.FETCH_POST_COMMENT,
            payload: data
        };
    }

    // return fetchDataReturnPromise(ENDPOINTS.USER_POSTS,TYPES.FETCH_POST_COMMENT)
}

export const fetchUsersPost =async ()=>{

    return fetchDataReturnPromise(ENDPOINTS.USER_POSTS,TYPES.FETCH_ALL_POST)
}