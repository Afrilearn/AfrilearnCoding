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


export const makePaymentStart = () => ({
    type: types.GET_PAYMENT_PLANS_START
});
export const makePaymentSuccess = (payload) => ({
    type: types.GET_PAYMENT_PLANS_SUCCESS,
    payload
});
export const makePaymentFail = (error) => ({
    type: types.GET_PAYMENT_PLANS_FAIL,
    payload: error
});



export const makePaymentInitiate = (courseId, paymentId, userId) => {
    console.log("API params", courseId, paymentId, userId)
    return function (dispatch) {
        dispatch(makePaymentStart())
        axios
            .post(`https://afrilearn-backend-01.herokuapp.com/api/v1/${userId}/pay`,
            
            {
                courseId,
                paymentId
            }

            )
            .then((res) => {
                dispatch(makePaymentSuccess(res.data))
            })
            .catch((error) => dispatch(makePaymentFail(error)))
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



