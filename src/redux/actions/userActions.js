import { userTypes } from './ActionTypes';
import { userService } from '../../services/userService';
import { alertActions } from './alertActions';
import { history } from '../../helpers/browserHistory';

const login = (email, password) => {
  const request = (user) => ({ type: userTypes.LOGIN_REQUEST, user });
  const success = (user) => ({ type: userTypes.LOGIN_SUCCESS, user });
  const failure = (error) => ({ type: userTypes.LOGIN_FAILURE, error });

  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user));

          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };
}

const logout = () => {
  console.log('logout action');
  userService.logout();
  history.push('/login');
  return { type: userTypes.LOGOUT };
}

export const userActions = {
  login,
  logout
};
