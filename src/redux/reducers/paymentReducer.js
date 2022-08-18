import * as types from '../types/paymentplans';

const intialState = {
    paymentPlans: [],
    paymentVerified: [],
    error: [],

};



const paymentReducer = (state = intialState, { type, payload}) => {
    switch (type) {
        case types.GET_PAYMENT_PLANS_START:
            return {
                ...state
            };
        case types.GET_PAYMENT_PLANS_SUCCESS:
            return {
               paymentPlans: payload
            }
        case types.GET_PAYMENT_PLANS_FAIL:
            return {
                ...state,
                error: payload
            }
        case types.PAYMENT_VERIFICATION_SUCCESS:
            return {
                paymentVerified: payload
            }
        case types.PAYMENT_VERIFICATION_FAILURE:
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