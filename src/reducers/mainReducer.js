import { combineReducers } from 'redux';

import registration from '../reducers/registration.reducer';
import login from '../reducers/login.reducer';
import productsList from '../reducers/productsReducer';

const mainReducer = combineReducers({
    registration, login, productsList
});

export default mainReducer;