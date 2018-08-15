import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {alert} from './reducers/alertReducer';
import {user} from './reducers/userReducer';
import {app} from './reducers/appReducer';

const reducer = combineReducers({
  alert,
  user,
  app
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));
