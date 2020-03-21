import axios from 'axios';
import { root, local } from '../../util/url'

export const addDataReturnPromise = async (ref, object, actiontype) => {

   
    try {
        await axios
            .post(`${root}/${ref}`, object).then(res => {
                if(res.data.token !== undefined){
                    setAuthorizationHeader(res.data.token)
                }
                

            })

       let data = {
            status: "SUCCESS",
            message: "Login is succesfull"
        };
        return {
            type: actiontype,
            payload: data
        };

    } catch (error) {
       let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: actiontype,
            payload: data
        };
    }
};



export const fetchDataReturnPromise = async (ref, actiontype) => {
    addAutorization()
    let data = []
    // console.log("aaaaaaaaa----",actiontype)
    try {
        await axios
            .get(`${root}/${ref}`).then(res => {
                // console.log("resData",res)
               data = res.data
            })

          

        return {
            type: actiontype,
            payload: data
        };

    } catch (error) {
       let data = {
            status: "FAILURE",
            message: error
        };
        return {
            type: actiontype,
            payload: data
        };
    }
};



const addAutorization = ()=>{
    let token = localStorage.getItem("FBIdtoken");
    axios.defaults.headers.common['Authorization'] = token;
}



const setAuthorizationHeader = (token) => {
    const FBIdtoken = `Auth ${token}`;
    localStorage.setItem("FBIdtoken", FBIdtoken);
    axios.defaults.headers.common['Authorization'] = FBIdtoken;
}