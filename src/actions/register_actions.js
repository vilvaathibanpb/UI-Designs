import { registerConstants } from '../constants/register_constants';
import { loginConstants } from '../constants/login_constants';
import { registerLoginServices } from '../services/registerLoginServices';
import { history } from 'react-router-dom';

export const registerActions = {
    register, login
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
            loginData => {
                dispatch(success());
                console.log(loginData);
                localStorage.setItem('loginResult', loginData);
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(loginData) { return { type: loginConstants.LOGIN_REQUEST, loginData } }
    function success(loginData) { return { type: loginConstants.LOGIN_SUCCESS, loginData } }
    function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }

}