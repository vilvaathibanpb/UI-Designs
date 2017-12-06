import { loginConstants } from '../constants/login_constants';

export default function login(state = { loggingIn: false, loggedIn: false }, action) {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return { loggingIn: true };
        case loginConstants.LOGIN_SUCCESS:
            return {
                loggingIn: false,
                loggedIn: true
            };
        case loginConstants.LOGIN_FAILURE:
            return {};
        default:
            return state
    }
}