import * as types from '../types/paymentplans';
import axios from 'axios';

export const getPaymentStart = () => ({
    type: types.GET_PAYMENT_PLANS_START
});
export const getPaymentSuccess = (payload) => ({
    type: types.GET_PAYMENT_PLANS_SUCCESS,
    payload
});
export const getPaymentFail = (error) => ({
    type: types.GET_PAYMENT_PLANS_FAIL,
    payload: error
});


export const verifyPaymentSuccess = (payload) => ({
    type: types.PAYMENT_VERIFICATION_SUCCESS,
    payload
});
export const verifyPaymentFail = (error) => ({
    type: types.PAYMENT_VERIFICATION_FAILURE,
    payload: error
});



export const verifyPaystackPaymentInitiate = (data, token) => {
    return function (dispatch) {
        axios
        .post("https://afrilearn-backend-01.herokuapp.com/api/v1/payments/verify-paystack-payment",
            {   data  },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
                console.log("API params", res.data)
                dispatch(verifyPaymentSuccess(res.data))
            })
            .catch((error) => dispatch(verifyPaymentFail(error)))
    }   
}


export const getPaymentInitiate = () => {
    return function (dispatch) {
        dispatch(getPaymentStart())
        axios
            .get('https://afrilearn-backend-01.herokuapp.com/api/v1/payments/plans',

            )
            .then((res) => {
                dispatch(getPaymentSuccess(res.data.paymentPlans))
            })
            .catch((error) => dispatch(getPaymentFail(error)))
    }   
}



