import * as TYPES from '../Types'
import { root, local } from '../../util/url'
import axios from 'axios';
import {addDataReturnPromise} from './index'
import * as END_POINT from '../../util/endPoints'

export const loginUser = async (data) => {




    return addDataReturnPromise(END_POINT.LOGIN,data,TYPES.LOGIN_USER)



}

export const signupUser = async (newUserData) => {

    return addDataReturnPromise(END_POINT.SIGNUP,newUserData,TYPES.SIGNUP_USER)
};

export const getUserData =async () =>{
    let data = []
    try {
        await axios
            .get(`${root}/user`).then(res => {
                console.log(res.data)
                data = res.data
            })


        return {
            type: TYPES.FETCH_USER_DATA,
            payload: data
        };

    } catch (error) {
       let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.FETCH_USER_DATA,
            payload: data
        };
    }


  };



  
