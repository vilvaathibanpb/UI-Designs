import { combineReducers } from 'redux';

import registration from '../reducers/registration.reducer';
import login from '../reducers/login.reducer';
import agreementsList from '../reducers/agreementsReducer';

const mainReducer = combineReducers({
    registration, login ,agreementsList
});

export default mainReducer;