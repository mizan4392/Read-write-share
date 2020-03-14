import * as TYPES from '../Types'



const newPostResponse = (state = null, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_POST:
            return action.payload;
        default:
            return state;
    }
}

export { newPostResponse }