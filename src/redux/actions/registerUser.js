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

export const registerUserInitiate = (fullName, email, password, confirmPassword, role, course) => {
    return function (dispatch) {
        console.log("API call ==> ", fullName, email, password, confirmPassword, role, course)
        dispatch(registerUserStart())
        axios
            .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/signup',
              {
                fullName, email, password, confirmPassword, role, course
              }
            )
            .then((res) => {
                dispatch(registerUserSuccess(res.data))
            })
            .catch((error) => dispatch(registerUserFail(error)))
    }   
}



