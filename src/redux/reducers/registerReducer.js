import * as types from '../types/registerUser';

const intialState = [];


const registerReducer = (state = intialState, { type, payload}) => {
    switch (type) {
        case types.REGISTER_USER_START:
            return {
                ...state
            };
        case types.REGISTER_USER_SUCCESS:
            return {
               data: payload
            }
        case types.REGISTER_USER_FAIL:
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

export default registerReducer;