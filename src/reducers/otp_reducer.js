import { otpConstants } from '../constants/login_constants';

export default function otp_generation(state = {
    otp_request: false,
    otp_success: false
}, action) {
    switch (action.type) {
        case otpConstants.OTP_REQUEST:
            return {
                otp_request: true
            };
        case otpConstants.OTP_SUCCESS:
            return {
                otp_request: false,
                otp_success: true
            };
        case otpConstants.OTP_FAILURE:
            return {};
        default:
            return state
    }
}