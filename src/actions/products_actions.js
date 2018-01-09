import { productsConstants , allproductsConstants } from '../constants/products_constants';
import { productsServices } from '../services/productsServices';
import { history } from 'react-router-dom';

export const productsActions = {
    productsList
}

function productsList(productName) {
    return dispatch => {
        dispatch(request(productName));
        productsServices.getProducts(productName)
            .then(
            response => {
                dispatch(success(response));
                localStorage.setItem('products', JSON.stringify(response));
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(productName) { return { type: productsConstants.PRODUCTS_LIST_REQUEST, productName } }
    function success(response) { return { type: productsConstants.PRODUCTS_LIST_SUCCESS, response } }
    function failure(error) { return { type: productsConstants.PRODUCTS_LIST_FAILURE, error } }
}

function allProducts(){
    return dispatch => {
        dispatch(request(productName));
        productsServices.getProducts(productName)
            .then(
            response => {
                dispatch(success(response));
                localStorage.setItem('products', JSON.stringify(response));
            },
            error => {
                dispatch(failure(error));
            }
            );
    };
    function request(productName) { return { type: allproductsConstants.ALL_PRODUCTS_LIST_REQUEST, productName } }
    function success(response) { return { type: allproductsConstants.ALL_PRODUCTS_LIST_SUCCESS, response } }
    function failure(error) { return { type: allproductsConstants.ALL_PRODUCTS_LIST_FAILURE, error } }
}