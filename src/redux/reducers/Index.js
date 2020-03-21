import { combineReducers } from 'redux'

import {
    notificationState
} from './reducers_misc'



import { newPostResponse ,deletePostResponse} from '../reducers/reducers_push'
import { login, signup,userData } from './reducers_auth'
import {allPosts} from './reducers_fetch'



const rootReducer = combineReducers({
    notificationState,
    //reducers auth
    login,
    signup,
    userData,

    //reducers push
    newPostResponse,
    deletePostResponse,

    //reducers fetch
    allPosts

    
})

export default rootReducer