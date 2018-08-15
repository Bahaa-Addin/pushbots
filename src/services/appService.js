import { authHeader } from '../helpers/authHeader';
import { store } from '../redux/store';
import { userActions } from '../redux/actions/userActions';

const getInit = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  console.log('requestOptions', requestOptions)
  return fetch(`https://testing.pushbots.com/api/`, requestOptions).then(handleResponse);
}

const getByFilter = (filter) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  console.log('requestOptions', requestOptions)
  return fetch(`https://testing.pushbots.com/api/?filter=${filter}`, requestOptions).then(handleResponse);
}

const handleResponse = (response) => response.json()
  .then(data => {
    if (!response.ok) {

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    if (data.code === 103) {
      // auto logout if 103 data code
      store.dispatch(userActions.logout());

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
      // location.reload(true);
    }
    console.log(data);
    return data;
  });

export const appService = {
  getInit,
  getByFilter
};
