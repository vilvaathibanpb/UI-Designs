import { loginConstants, otpConstants } from '../constants/login_constants';


export default function login(state = { loggingIn: false, loggedIn: false, data: '' }, action) {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return { loggingIn: true };
        case loginConstants.LOGIN_SUCCESS:
            return {
                loggingIn: false,
                loggedIn: true,
                data: action
            };
        case loginConstants.LOGIN_FAILURE:
            return {};
        default:
            return state
    }
}