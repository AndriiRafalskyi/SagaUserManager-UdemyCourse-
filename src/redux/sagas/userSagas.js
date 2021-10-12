import {
    takeEvery,
    takeLatest,
    put,
    delay,
    call
} from 'redux-saga/effects';
import { createUserError, createUserSuccess, deleteUserSuccess, loadUsersError, loadUsersSuccess, setToastMessage } from '../actions';
import { CREATE_USER_START, DELETE_USER_START, LOAD_USERS_START } from '../actionTypes';
import { usersApi } from '../api';
import history from '../../history';
import { showToastMessage } from './messagingSagas';

export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(usersApi.loadUsers);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data));
        }
    } catch(error) {
        yield put(loadUsersError(error.response ? error.response.data : 'Server Error'));
    }
}

export function* onCreateUserStartAsync({payload}){
    try {
        const response = yield call(usersApi.createUser, payload);
        if (response.status === 201) {
            yield put(createUserSuccess());
            yield call(showToastMessage, 'User is created successfully');
            history.push('/');
        }
    } catch(error) {
        yield put(createUserError(error.response ? error.response.data : 'Server Error'));
    }
}

export function* onDeleteUserStartAsync({ payload }) {
    try {
        const response = yield call(usersApi.deleteUser, payload.userId );
        if (response.status === 200) {
            yield put(deleteUserSuccess(payload.userId));
            yield call(showToastMessage, 'User is deleted successfully');
        }
    } catch(error) {
        yield put(createUserError(error.response ? error.response.data : 'Server Error'));
    }
}

export function* onLoadUsers() {
    yield takeEvery(LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onDeleteUser() {
    yield takeEvery(DELETE_USER_START, onDeleteUserStartAsync);
}

export function* onCreateUser(){
    yield takeLatest(CREATE_USER_START, onCreateUserStartAsync);
}