import axios from "axios"
import * as types from "./actionTypes"

export const login =(payload)=>(dispatch)=>{
    dispatch({type : types.USER_LOGIN_REQUEST})
    return axios.post(`https://insta-backend-deploy.onrender.com/login`,payload)
    .then((res)=>{
         dispatch({type : types.USER_LOGIN_SUCCESS, payload:res.data})
        console.log("user",res.data)
    })
    .catch((err)=>{
         dispatch({type : types.USER_LOGIN_FAILURE, payload:err})
    })
}


export const signup =(payload)=>(dispatch)=>{
    dispatch({type : types.USER_SIGNUP_REQUEST})
    return axios.post(`https://insta-backend-deploy.onrender.com/signup`,payload)
    .then((res)=>{
         dispatch({type : types.USER_SIGNUP_SUCCESS, payload:res.data})
         console.log("user",res.data)
    })
    .catch((err)=>{
         dispatch({type : types.USER_SIGNUP_FAILURE, payload:err})
    })
}