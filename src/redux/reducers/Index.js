import { combineReducers } from 'redux'

import {
    notificationState
} from './reducers_misc'

import { newPostResponse } from '../reducers/reducers_push'
import { login, signup } from './reducers_auth'



const rootReducer = combineReducers({
    notificationState,
    //reducers auth
    login,
    signup,

    //reducers push
    newPostResponse
})

export default rootReducer