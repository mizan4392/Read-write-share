import * as TYPES from '../Types'
import { root, local } from '../../util/url'
import axios from 'axios';


export const loginUser = async (data) => {

    // let token = ""
    // axios
    //     .post(`${root}/login`, data)
    //     .then((res) => {
    //         setAuthorizationHeader(res.data.token)
    //         token = res.data.token
    //         history.push("/");

    //     })
    //     .catch((err) => {
    //         console.log("err----------", err)

    //     });

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

export const signupUser = async (newUserData, history) => {

    axios
        .post("/signup", newUserData)
        .then((res) => {
            setAuthorizationHeader(res.data.token)
            history.push("/login");
        })
        .catch((err) => {

        });
};


const setAuthorizationHeader = (token) => {
    const FBIdtoken = `Auth ${token}`;
    localStorage.setItem("FBIdtoken", FBIdtoken);
    axios.defaults.headers.common['Authorization'] = FBIdtoken;
}