import { registerConstants } from '../constants/register_constants';
import { loginConstants, otpConstants } from '../constants/login_constants';
import { registerLoginServices } from '../services/registerLoginServices';
import { history } from 'react-router-dom';

export const registerActions = {
    register, login , otpRequest
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        registerLoginServices.register(user)
            .then(
            user => {
                dispatch(success());
                console.log(user);
                localStorage.setItem('registration', user);
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(user) { return { type: registerConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: registerConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: registerConstants.REGISTER_FAILURE, error } }
}

function login(loginData) {
    return dispatch => {
        dispatch(request(loginData));
        registerLoginServices.login(loginData)
            .then(
            response => {
                dispatch(success(response));
                localStorage.setItem('jwt', response['token']);
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(loginData) { return { type: loginConstants.LOGIN_REQUEST, loginData } }
    function success(response) { return { type: loginConstants.LOGIN_SUCCESS, response } }
    function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }

}

function otpRequest(phone) {
    return dispatch => {
        dispatch(request(phone));
        registerLoginServices.getOTP(phone)
            .then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(phone) { return { type: otpConstants.OTP_REQUEST, phone } }
    function success(response) { return { type: otpConstants.OTP_SUCCESS, response } }
    function failure(error) { return { type: otpConstants.OTP_FAILURE, error } }

}