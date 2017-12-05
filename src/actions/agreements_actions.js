import { agreementsConstants } from '../constants/agreements_constants';
import { agreementsServices } from '../services/agreementsServices';
import { history } from 'react-router-dom';

export const agreementsActions = {
    agreementsList
}

function agreementsList(agreementName) {
    return dispatch => {
        dispatch(request(agreementName));
        agreementsServices.getAgreements(agreementName)
            .then(
            response => {
                dispatch(success(response));
                console.log(response);
                localStorage.setItem('agreements', JSON.stringify(response));
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(agreementName) { return { type: agreementsConstants.AGREEMENTS_LIST_REQUEST, agreementName } }
    function success(response) { return { type: agreementsConstants.AGREEMENTS_LIST_SUCCESS, response } }
    function failure(error) { return { type: agreementsConstants.AGREEMENTS_LIST_FAILURE, error } }
}