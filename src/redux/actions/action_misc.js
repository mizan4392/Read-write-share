
import * as TYPES from '../Types'


export function setNotificationState(notificationState) {

    return {
        type: TYPES.NOTIFICATION_STATE,
        payload: notificationState
    };
}



export const setPostIdForComment = async (postId) => {

    
    return {
        type: TYPES.SET_POST_ID_FOR_COMMENT,
        payload: postId
    }
}

export const setPostIdForShare = async (postId) => {

    
    return {
        type: TYPES.SET_POST_ID_FOR_SHARE,
        payload: postId
    }
}




export const signout = async () => {
    return {
        type: TYPES.LOGOUT_USER,
        data: null
    }
}