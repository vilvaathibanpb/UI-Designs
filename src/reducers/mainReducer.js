import { combineReducers } from 'redux';

import registration from '../reducers/registration.reducer';
import login from '../reducers/loginReducer';
import agreements from '../reducers/agreementsReducer';

const mainReducer = combineReducers({
    registration, login
});

export default mainReducer;