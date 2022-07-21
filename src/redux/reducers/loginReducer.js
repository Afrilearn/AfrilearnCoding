import * as types from '../types/loginUser';

const intialState = [];


const loginReducer = (state = intialState, { type, payload}) => {
    switch (type) {
        case types.LOGIN_USER_START:
            return {
                ...state
            };
        case types.LOGIN_USER_SUCCESS:
            return {
               data: payload
            }
        case types.LOGIN_USER_FAIL:
            return {
                ...state,
                error: payload
            }
    
        default:
            return {
                ...state
            };
    }
}

export default loginReducer;