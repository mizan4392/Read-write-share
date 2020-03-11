import { combineReducers } from 'redux'

import {
    notificationState
} from './reducers_misc'

import { login, signup } from './reducers_auth'



const rootReducer = combineReducers({
    notificationState,
    //reducers auth
    login,
    signup
})

export default rootReducer