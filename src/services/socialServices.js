import { base_url } from '../helpers/urls';

export const socialServices = {
    google, facebook
}

function google(g) {
    const requestBody = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(base_url + 'api/auth/'+g, requestBody).then(handleResponse);

}

function facebook(f) {
    const requestBody = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(base_url + 'api/auth'+f, requestBody).then(handleResponse);

}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}