import * as types from '../types/registerUser';
import axios from 'axios';

export const registerUserStart = () => ({
    type: types.REGISTER_USER_START
});
export const registerUserSuccess = (payload) => ({
    type: types.REGISTER_USER_SUCCESS,
    payload
});
export const registerUserFail = (error) => ({
    type: types.REGISTER_USER_FAIL,
    payload: error
});


