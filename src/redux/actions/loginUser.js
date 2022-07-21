import * as types from '../types/loginUser';
import axios from 'axios';

export const loginUserStart = () => ({
    type: types.LOGIN_USER_START
});
export const loginUserSuccess = (payload) => ({
    type: types.LOGIN_USER_SUCCESS,
    payload
});
export const loginUserFail = (error) => ({
    type: types.LOGIN_USER_FAIL,
    payload: error
});

export const loginUserInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginUserStart())
        axios
            .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/login',
              {
                email,
                password
               
              }
            )
            .then((res) => {
                dispatch(loginUserSuccess(res.data))
            })
            .catch((error) => dispatch(loginUserFail(error)))
    }   
}



