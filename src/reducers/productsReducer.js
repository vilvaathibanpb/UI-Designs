import { productsConstants } from '../constants/products_constants';

export default function productsList(state = { receivedAgreements: false, productData: [] }, action) {
    switch (action.type) {
        case productsConstants.PRODUCTS_LIST_REQUEST:
            return { requestingProducts: true };
        case productsConstants.PRODUCTS_LIST_SUCCESS:
            return {
                receivedProducts: true,
                productData: action
            };
        case productsConstants.PRODUCTS_LIST_FAILURE:
            return {};
        default:
            return state
    }
}