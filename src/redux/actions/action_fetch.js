import * as TYPES from '../Types'
import * as ENDPOINTS from '../../util/endPoints'

import {fetchDataReturnPromise} from './index'


export const fetchAllPost =async ()=>{

    return fetchDataReturnPromise(ENDPOINTS.POSTS,TYPES.FETCH_ALL_POST)
}

export const fetchUsersPost =async ()=>{

    return fetchDataReturnPromise(ENDPOINTS.USER_POSTS,TYPES.FETCH_ALL_POST)
}