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

function login(login) {
    return dispatch => {
        dispatch(request(login));
        registerLoginServices.login(login)
            .then(
            login => {
                dispatch(success());
                console.log(login);
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(login) { return { type: loginConstants.LOGIN_REQUEST, login } }
    function success(login) { return { type: loginConstants.LOGIN_SUCCESS, login } }
    function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }

}