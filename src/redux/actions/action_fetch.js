import * as TYPES from '../Types'
import * as ENDPOINTS from '../../util/endPoints'

import {fetchDataReturnPromise} from './index'
export const fetchAllPost =async ()=>{

    return fetchDataReturnPromise(ENDPOINTS.POSTS,TYPES.FETCH_ALL_POST)
}