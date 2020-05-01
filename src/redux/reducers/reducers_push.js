import * as TYPES from '../Types'



const unLikePostResponse = (state = null, action) => {
    switch (action.type) {
        case TYPES.UNLIKE_ON_POST:
            return action.payload;
        default:
            return state;
    }
}


const likePostResponse = (state = null, action) => {
    switch (action.type) {
        case TYPES.LIKE_ON_POST:
            return action.payload;
        default:
            return state;
    }
}


const deletePostResponse = (state = null, action) => {
    switch (action.type) {
        case TYPES.DELETE_NEW_POST:
            return action.payload;
        default:
            return state;
    }
}



const newPostResponse = (state = null, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_POST:
            return action.payload;
        default:
            return state;
    }
}

const postCommentResponse = (state = null, action) => {
    switch (action.type) {
        case TYPES.COMMENT_ON_POST:
            return action.payload;
        default:
            return state;
    }
}

export { newPostResponse ,deletePostResponse,likePostResponse,unLikePostResponse,postCommentResponse}