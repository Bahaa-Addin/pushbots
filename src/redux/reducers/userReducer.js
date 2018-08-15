import { userTypes } from '../actions/ActionTypes';
import { getUser } from '../../helpers/user';

let _user = getUser();
const initialState = _user ? { loggedIn: true, user } : {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userTypes.LOGIN_FAILURE:
      return {};
    case userTypes.LOGOUT:
      return {};
    case userTypes.GETALL_REQUEST:
      return {};
    case userTypes.GETALL_SUCCESS:
      return {};
    case userTypes.GETALL_FAILURE:
      return {};
    default:
      return state
  }
}