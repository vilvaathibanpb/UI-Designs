import { agreementsConstants } from '../constants/agreements_constants';

export default function agreementsList(state = { receivedAgreements: false, data: [] }, action) {
    switch (action.type) {
        case agreementsConstants.AGREEMENTS_LIST_REQUEST:
            return { requestingAgreements: true };
        case agreementsConstants.AGREEMENTS_LIST_SUCCESS:
            return {
                receivedAgreements: true,
                data: action
            };
        case agreementsConstants.AGREEMENTS_LIST_FAILURE:
            return {};
        default:
            return state
    }
}