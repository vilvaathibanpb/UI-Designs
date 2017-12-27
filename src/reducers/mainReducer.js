import { combineReducers } from 'redux';

import registration from '../reducers/registration.reducer';
import login from '../reducers/login.reducer';
import productsList from '../reducers/productsReducer';
import facebook from '../reducers/faceBookReducer';
import google from '../reducers/googleReducer';

const mainReducer = combineReducers({
    registration, login, productsList, facebook, google
});

export default mainReducer;