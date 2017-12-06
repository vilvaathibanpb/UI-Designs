import { productsConstants } from '../constants/products_constants';

export default function productsList(state = { receivedAgreements: false, data: [] }, action) {
    switch (action.type) {
        case productsConstants.PRODUCTS_LIST_REQUEST:
            return { requestingProducts: true };
        case productsConstants.PRODUCTS_LIST_SUCCESS:
            return {
                receivedProducts: true,
                data: action
            };
        case productsConstants.PRODUCTS_LIST_FAILURE:
            return {};
        default:
            return state
    }
}