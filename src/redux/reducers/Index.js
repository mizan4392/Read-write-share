import { combineReducers } from 'redux'

import {
    notificationState
} from './reducers_misc'



import {
    newPostResponse,
    deletePostResponse,
    likePostResponse,
    unLikePostResponse,
    postCommentResponse,
    postShareResponse
} from '../reducers/reducers_push'
import { login, signup, userData } from './reducers_auth'
import { allPosts, postComments } from './reducers_fetch'
import { postIdForComment, postForShare } from './reducers_misc'



const rootReducer = combineReducers({
    notificationState,
    //reducers auth
    login,
    signup,
    userData,

    //reducers push
    newPostResponse,
    deletePostResponse,
    likePostResponse,
    unLikePostResponse,
    postCommentResponse,
    postShareResponse,

    //reducers fetch
    allPosts,
    postComments,

    //reducers misc
    postIdForComment,
    postForShare


})

export default rootReducer