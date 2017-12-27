import { googleConstants } from '../constants/google_constants';
import { facebookConstants } from '../constants/facebook_constants';
import { socialServices } from '../services/socialServices';
import { history } from 'react-router-dom';

export const socialActions = {
    google, facebook
}

function google(googleTerm) {
    return dispatch => {
        dispatch(request(googleTerm));
        socialServices.google(googleTerm)
            .then(
            response => {
                dispatch(success(response));
                console.log(user);
                localStorage.setItem('google', response);
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(user) { return { type: googleConstants.GOOGLE_REQUEST, googleTerm } }
    function success(response) { return { type: googleConstants.GOOGLE_SUCCESS, response } }
    function failure(error) { return { type: googleConstants.GOOGLE_FAILURE, error } }
}

function facebook(fbTerm) {
    return dispatch => {
        dispatch(request(fbTerm));
        socialServices.facebook(fbTerm)
            .then(
            response => {
                dispatch(success(response));
                console.log(response);
                localStorage.setItem('fb', response);
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(loginData) { return { type: facebookConstants.FACEBOOK_REQUEST, fbTerm } }
    function success(loginData) { return { type: facebookConstants.FACEBOOK_SUCCESS, response } }
    function failure(error) { return { type: facebookConstants.FACEBOOK_FAILURE, error } }

}