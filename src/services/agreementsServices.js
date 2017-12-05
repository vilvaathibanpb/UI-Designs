import { base_url } from '../helpers/urls';

export const agreementsServices = {
    getAgreements
}

function getAgreements(agreementsName) {
    const requestBody = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(base_url + '/product/' + agreementsName, requestBody).then(handleResponse);

}
function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}