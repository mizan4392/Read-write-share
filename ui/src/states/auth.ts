import { action, Action, thunk, Thunk } from "easy-peasy";
import { LoginDataI, LoginResAPII, LoginResI } from "../pages/login/login";
import { SignupI, SignupResI } from "../pages/signup/signup";
import { signupUser, loginUser } from '../services/auth'
import jwt_decode from 'jwt-decode'

export let token: string | undefined = undefined

export interface userI {
    id: number
    userName: string
    fullName: string,
    address: string,
    phone: string,
    email: string,
    photoUrl: string,
    interest: string,
    bio: string,
    dob: string,
    rating: number,
    coverPhotoUrl: string,
    createdAt: string,
    updatedAt: string
}

export interface AuthState {
    user: userI | null
    setUserData: Action<AuthState,  userI | null>
    signupUserLod: boolean
    signupUserRes: SignupResI | null
    setSignupUserLod: Action<AuthState, boolean>
    setSignupUserRes: Action<AuthState, SignupResI | null>
    signupUser: Thunk<AuthState, SignupI>

    loginUserLod: boolean
    loginUserRes: LoginResI | null
    setLoginUserLod: Action<AuthState, boolean>
    setLoginUserRes: Action<AuthState, LoginResI | null>
    loginUser: Thunk<AuthState, LoginDataI>

}


export const authState: AuthState = {
    user: null,
    setUserData: action((state, payload) => {
        state.user = payload
    }),
    signupUserLod: false,
    signupUserRes: null,
    setSignupUserLod: action((state, payload) => {
        state.signupUserLod = payload
    }),
    setSignupUserRes: action((state, payload) => {
        state.signupUserRes = payload
    }),
    signupUser: thunk(async (actions, payload) => {
        actions.setSignupUserLod(true)
        const res = await signupUser(payload)
        if (res.status === 200 || res.status === 201) {
            actions.setSignupUserRes({ success: true, message: '' })
            actions.setSignupUserLod(false)
        } else {
            let resdata = await res.json()
            actions.setSignupUserRes(resdata)
            actions.setSignupUserLod(false)
        }
    }),
    loginUserLod: false,
    loginUserRes: null,
    setLoginUserLod: action((state, payload) => {
        state.loginUserLod = payload
    }),
    setLoginUserRes: action((state, payload) => {
        state.loginUserRes = payload
    }),
    loginUser: thunk(async (actions, payload) => {
        actions.setLoginUserLod(true)
        const res = await loginUser(payload)
        if (res.status === 200 || res.status === 201) {
            const resData: LoginResAPII = await res.json()
            localStorage.setItem("rwd_t", resData.jwt)
            const decoded:any = jwt_decode(resData.jwt)
            actions.setUserData(decoded.user)
            actions.setLoginUserRes({ success: true })
            actions.setLoginUserLod(false)
        } else {
            actions.setLoginUserRes({ success: false })
            actions.setLoginUserLod(false)
        }
    }),

}