
import * as TYPES from '../Types'


export function setNotificationState(notificationState) {

    return {
        type: TYPES.NOTIFICATION_STATE,
        payload: notificationState
    };
}