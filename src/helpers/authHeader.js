import {getToken, getUser} from "./user";

export const authHeader = () => {
  // return authorization header with jwt token
  const user = getUser();
  const token = getToken();

  console.log('user', user, 'token', token);
  if (user && token) {
    return { 'Authorization': 'Bearer ' + token };
  } else {
    return {};
  }
}