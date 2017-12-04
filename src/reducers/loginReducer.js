import { loginConstants } from '../constants/login_constants';

export default function login(state = {}, action) {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return { login: true };
        case loginConstants.LOGIN_SUCCESS:
            return {};
        case loginConstants.LOGIN_FAILURE:
            return {};
        default:
            return state
    }
}