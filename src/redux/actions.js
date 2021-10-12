import { CLEAR_TOAST_MESSAGE, CREATE_USER_ERROR, CREATE_USER_START, CREATE_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, LOAD_USERS_ERROR, LOAD_USERS_START, LOAD_USERS_SUCCESS, SET_TOAST_MESSAGE } from "./actionTypes";

export const loadUsersStart = () => ({
    type: LOAD_USERS_START
})

export const loadUsersSuccess = (users) => ({
    type: LOAD_USERS_SUCCESS,
    payload: users
})

export const loadUsersError = (error) => ({
    type: LOAD_USERS_ERROR,
    payload: error
})

export const deleteUserStart = (userId) => ({
    type: DELETE_USER_START,
    payload: userId
})

export const deleteUserSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    payload: userId
})

export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    payload: error
})

export const createUserStart = (user) => ({
    type: CREATE_USER_START,
    payload: user
})

export const createUserSuccess = () => ({
    type: CREATE_USER_SUCCESS
})

export const createUserError = (error) => ({
    type: CREATE_USER_ERROR,
    payload: error
})

export const setToastMessage = (message) => ({
    type: SET_TOAST_MESSAGE,
    payload: message
})

