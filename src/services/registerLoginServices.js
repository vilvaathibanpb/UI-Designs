import { base_url } from '../helpers/urls';

export const registerLoginServices = {
    register, login , getOTP
}

function register(user) {
    const requestBody = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }
    return fetch(base_url + 'api/register', requestBody).then(handleResponse);

}

function login(login) {
    const requestBody = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
    }
    return fetch(base_url + 'api/authenticate', requestBody).then(handleResponse);

}

function getOTP(phone) {
    const requestBody = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'mobile':phone})
    }
    return fetch(base_url + 'notify/sms', requestBody).then(handleResponse);

}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}