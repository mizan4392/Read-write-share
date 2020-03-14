import * as TYPES from '../Types'



const login = (state = null, action) => {
    switch (action.type) {
        case TYPES.LOGIN_USER:
            return action.payload;
        case TYPES.LOGOUT_USER:
            return null
        default:
            return state;
    }
}

const signup = (state = null, action) => {
    switch (action.type) {
        case TYPES.SIGNUP_USER:
            return action.payload;
        default:
            return state;
    }
}
const userData = (state = null, action) => {
    switch (action.type) {
        case TYPES.FETCH_USER_DATA:
            return action.payload;
        default:
            return state;
    }
}

export { login, signup ,userData}
