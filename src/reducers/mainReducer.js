import { combineReducers } from 'redux';

import registration from '../reducers/registration.reducer';
import login from '../reducers/login.reducer';
import otp_generation from "../reducers/otp_reducer";
import productsList from '../reducers/productsReducer';
import homeProductsReducer from '../reducers/homeProductsReducer';

const mainReducer = combineReducers({
    registration, login, otp_generation, productsList, homeProductsReducer
});

export default mainReducer;