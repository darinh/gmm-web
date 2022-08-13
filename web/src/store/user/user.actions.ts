export const LOGIN_USER = '[User] LOGIN_USER';
export const LOGIN_USER_SUCCESS = '[User] LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = '[User] LOGIN_USER_ERROR';

export const LOGOUT_USER = '[User] LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = '[User] LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = '[User] LOGOUT_USER_ERROR';

export const GET_USER = '[User] GET_USER';
export const GET_USER_SUCCESS = '[User] GET_USER_SUCCESS';
export const GET_USER_ERROR = '[User] GET_USER_ERROR';

export const loginUserAction = () => ({ type: LOGIN_USER });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
export const getUserAction = () => ({ type: GET_USER });
