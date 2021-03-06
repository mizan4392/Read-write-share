import * as TYPES from '../Types'

const allPosts = (state = null, action) => {
    switch (action.type) {
        case TYPES.FETCH_ALL_POST:
            return action.payload;
        default:
            return state;
    }
}

const postComments = (state = null, action) => {
    switch (action.type) {
        case TYPES.FETCH_POST_COMMENT:
            return action.payload;
        default:
            return state;
    }
}

export{allPosts,postComments}