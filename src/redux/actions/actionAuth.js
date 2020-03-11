import * as TYPES from '../Types'
import { root, local } from '../../util/url'
import axios from 'axios';


export const loginUser = async (data) => {

    try {
        await axios
            .post(`${root}/login`, data).then(res => {
                setAuthorizationHeader(res.data.token)

            })

        data = {
            status: "SUCCESS",
            message: "Login is succesfull"
        };
        return {
            type: TYPES.LOGIN_USER,
            payload: data
        };

    } catch (error) {
        data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.LOGIN_USER,
            payload: data
        };
    }

}

export const signupUser = async (newUserData) => {

    try {
        await axios
            .post(`${root}/signup`, newUserData).then(res => {
                //setAuthorizationHeader(res.data.token)

            })

        let data = {
            status: "SUCCESS",
            message: "Signup is succesfull"
        };
        return {
            type: TYPES.LOGIN_USER,
            payload: data
        };

    } catch (error) {
        let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: TYPES.LOGIN_USER,
            payload: data
        };
    }
};


const setAuthorizationHeader = (token) => {
    const FBIdtoken = `Auth ${token}`;
    localStorage.setItem("FBIdtoken", FBIdtoken);
    axios.defaults.headers.common['Authorization'] = FBIdtoken;
}