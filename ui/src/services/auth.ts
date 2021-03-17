import { LoginDataI } from '../pages/login/login'
import { SignupI } from '../pages/signup/signup'
import {post} from '../services/http'

export const signupUser = (payload:SignupI) => post('/auth/signup',payload)
export const loginUser = (payload:LoginDataI) => post('/auth/login',payload)

