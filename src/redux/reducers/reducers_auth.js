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

export { login }
