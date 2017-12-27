import { base_url } from '../helpers/urls';

export const productsServices = {
    getProducts
}

function getProducts(productsName) {
    const requestBody = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(base_url + 'api/product/' + productsName, requestBody).then(handleResponse);

}
function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}