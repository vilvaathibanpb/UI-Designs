import { allproductsConstants } from '../constants/products_constants';


export default function homeProducts(state = { requestingAllHomeProducts: false, receivedAllProducts: false, data: '' }, action) {
    switch (action.type) {
        case allproductsConstants.ALL_PRODUCTS_LIST_REQUEST:
            return { requestingAllHomeProducts: true };
        case allproductsConstants.ALL_PRODUCTS_LIST_SUCCESS:
            return {
                requestingAllHomeProducts: false,
                receivedAllProducts: true,
                data: action
            };
        case allproductsConstants.ALL_PRODUCTS_LIST_FAILURE:
            return {};
        default:
            return state
    }
}