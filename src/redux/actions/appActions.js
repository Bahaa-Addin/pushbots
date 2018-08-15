import { appTypes } from './ActionTypes';
import { appService } from '../../services/appService';
import { alertActions } from './alertActions';

const getApps = () => {
  const request = () => ({ type: appTypes.GETALL_REQUEST });
  const success = (users) => ({ type: appTypes.GETALL_SUCCESS, users });
  const failure = (error) => ({ type: appTypes.GETALL_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    appService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      );
  };

}

export const userActions = {
  getApps
};
