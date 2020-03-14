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
