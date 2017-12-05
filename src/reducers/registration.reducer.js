import { registerConstants } from '../constants/register_constants';

export default function registration(state = { registered: false }, action) {
  switch (action.type) {
    case registerConstants.REGISTER_REQUEST:
      return { registering: true };
    case registerConstants.REGISTER_SUCCESS:
      return { registered: true };
    case registerConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}
