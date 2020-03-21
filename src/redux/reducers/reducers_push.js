import * as TYPES from '../Types'


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

export { newPostResponse ,deletePostResponse}