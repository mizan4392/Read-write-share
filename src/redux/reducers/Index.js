import { combineReducers } from 'redux'

import {
    notificationState
} from './reducers_misc'

import { login } from './reducers_auth'



const rootReducer = combineReducers({
    notificationState,

    login
})

export default rootReducer