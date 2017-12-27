import { facebookConstants } from '../constants/facebook_constants';

export default function facebook(state = { fb_connect: false, fb_data: [] }, action) {
    switch (action.type) {
        case facebookConstants.FACEBOOK_REQUEST:
            return { fbConnectRequest: true };
        case facebookConstants.FACEBOOK_SUCCESS:
            return {
                fb_connect: true,
                fb_data: action
            };
        case facebookConstants.FACEBOOK_FAILURE:
            return {};
        default:
            return state
    }
}