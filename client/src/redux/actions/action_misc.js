import * as TYPES from "../Types";

export function createPostModal(payload) {
  return {
    type: TYPES.CREATE_POST_MODAL,
    payload: payload,
  };
}

export function createEventModal(payload) {
  return {
    type: TYPES.CREATE_EVENT_MODAL,
    payload: payload,
  };
}

export function setNotificationState(notificationState) {
  return {
    type: TYPES.NOTIFICATION_STATE,
    payload: notificationState,
  };
}

export const setPostIdForComment = async (postId) => {
  return {
    type: TYPES.SET_POST_ID_FOR_COMMENT,
    payload: postId,
  };
};

export const setPostForShare = async (postId) => {
  return {
    type: TYPES.SET_POST_FOR_SHARE,
    payload: postId,
  };
};

export const signout = async () => {
  return {
    type: TYPES.LOGOUT_USER,
    data: null,
  };
};
