import { createSelector } from 'reselect';

const getAllUsers = state => state.users.users;
const getToastMessage = state => state.users.toastMessage;

export const getFullUsersData = createSelector(
    getAllUsers,
    users => users);

export const getUserNames = createSelector(
    getAllUsers,
    users => users.map(user => user.name));

export const getToast = createSelector(
    getToastMessage,
    message => message
)