import { setToastMessage } from "../actions";
import { put } from 'redux-saga/effects';

export function* showToastMessage(toastMessage){
    yield put(setToastMessage(toastMessage));
    yield put(setToastMessage(null));
}