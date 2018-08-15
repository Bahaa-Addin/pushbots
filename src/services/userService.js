import {setUser, removeUser, setToken} from '../helpers/user';

const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  };

  return fetch(`https://testing.pushbots.com/api/auth/login`, requestOptions)
    .then(handleResponse)
    .then(res => {
      // login successful if there's a jwt token in the response
      console.log('user credentials', res);
      if (res.access_token) {
        const {user, access_token} = res;
        // redux user details and jwt token in local storage to keep user logged in between page refreshes
        setUser(user);
        setToken(access_token);
      }

      return res;
    });
}

const logout = () => {
  // remove user from local storage to log user out
  removeUser();
}

const handleResponse = (response) => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const userService = {
  login,
  logout,
};
