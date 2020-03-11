
import * as TYPES from '../Types'


export function setNotificationState(notificationState) {

    return {
        type: TYPES.NOTIFICATION_STATE,
        payload: notificationState
    };
}


export const signout = async () => {
    return {
        type: TYPES.LOGOUT_USER,
        data: null
    }
}