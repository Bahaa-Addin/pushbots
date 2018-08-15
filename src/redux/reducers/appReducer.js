import { appTypes } from '../actions/ActionTypes';

export const app = (state = {}, action) => {
  switch (action.type) {
    case appTypes.GETALL_REQUEST:
      return {
        loading: true
      };
    case appTypes.GETALL_SUCCESS:
      return {
        items: action.apps
      };
    case appTypes.GETALL_FAILURE:
      return {
        error: action.error
      };

    default:
      return state
  }
};
