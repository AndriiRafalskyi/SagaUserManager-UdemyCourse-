import { fork, all } from "redux-saga/effects";
import { onCreateUser, onDeleteUser, onLoadUsers } from "./userSagas";

const userSagas = [
    fork(onLoadUsers),
    fork(onCreateUser),
    fork(onDeleteUser)
]

export default function *rootSaga() {
    yield all([...userSagas])
}