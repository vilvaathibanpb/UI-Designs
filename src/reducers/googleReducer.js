import { googleConstants } from '../constants/google_constants';

export default function google(state = { google_request: false, google_connect: false, google_data: [] }, action) {
    switch (action.type) {
        case googleConstants.GOOGLE_REQUEST:
            return { googleConnectRequest: true };
        case googleConstants.GOOGLE_SUCCESS:
            return {
                google_connect: true,
                google_data: action
            };
        case googleConstants.GOOGLE_FAILURE:
            return {};
        default:
            return state
    }
}