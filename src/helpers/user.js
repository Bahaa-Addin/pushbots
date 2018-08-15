export const setUser = (user) => {localStorage.setItem('user', JSON.stringify(user))};

export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const removeUser = () => {localStorage.removeItem('user')};

export const setToken = (token) => {localStorage.setItem('token', JSON.stringify(token))};

export const getToken = () => JSON.parse(localStorage.getItem('token'));

