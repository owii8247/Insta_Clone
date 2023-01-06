import * as types from "./actionTypes"

const initialState = {

    isAuth: false,
    isAuthLoading: false,
    isAuthError: false
}

export const reducer = (oldState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        default:
            return oldState
        case types.USER_LOGIN_REQUEST:
            return { ...oldState, isAuthLoading: true }
        case types.USER_LOGIN_SUCCESS:
            return { ...oldState, isAuthLoading: false, isAuth: true}
        case types.USER_LOGIN_FAILURE:
            return { ...oldState, isAuthLoading: false, isAuthError: true, isAuth: false }
            case types.USER_SIGNUP_REQUEST:
                return { ...oldState, isAuthLoading: true }
            case types.USER_SIGNUP_SUCCESS:
                return { ...oldState, isAuthLoading: false, isAuth: true}
            case types.USER_SIGNUP_FAILURE:
                return { ...oldState, isAuthLoading: false, isAuthError: true, isAuth: false }   
    }
}