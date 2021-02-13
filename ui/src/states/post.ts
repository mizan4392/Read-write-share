import { Action, action } from 'easy-peasy'

export interface PostState {
    createPostDia: boolean
    setCreatePostDia: Action<PostState, boolean>
}

export const postState: PostState = {
    createPostDia: false,
    setCreatePostDia: action((state, payload: boolean) => {
        state.createPostDia = payload;
    }),
}