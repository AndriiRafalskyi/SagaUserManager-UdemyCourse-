import { CREATE_USER_ERROR, CREATE_USER_START, CREATE_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, LOAD_USERS_ERROR, LOAD_USERS_START, LOAD_USERS_SUCCESS, SET_TOAST_MESSAGE } from "../actionTypes";

const initialState = {
    users: null,
    loading: false,
    error: null,
    toastMessage: null
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_USERS_START:
        case CREATE_USER_START:
        case DELETE_USER_START:
            return {
                ...state,
                loading: true
            }
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case SET_TOAST_MESSAGE:
            return {
                ...state,
                toastMessage: action.payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case LOAD_USERS_ERROR:
        case CREATE_USER_ERROR:
        case DELETE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}