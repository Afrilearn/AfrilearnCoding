import * as types from '../types/paymentplans';

const intialState = [];


const paymentReducer = (state = intialState, { type, payload}) => {
    switch (type) {
        case types.GET_PAYMENT_PLANS_START:
            return {
                ...state
            };
        case types.GET_PAYMENT_PLANS_SUCCESS:
            return {
               data: payload
            }
        case types.GET_PAYMENT_PLANS_FAIL:
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

export default paymentReducer;