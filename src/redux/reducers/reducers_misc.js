import * as TYPES from '../Types'

const notificationState = (state = null, action) => {
    switch (action.type) {
        case TYPES.NOTIFICATION_STATE:
            return action.payload;
        default:
            return state;
    }
};

const login = (state = null, action) => {
    switch (action.type) {
        case TYPES.LOGOUT_USER:
            return action.payload;
        default:
            return state;
    }
}

export { notificationState, login }