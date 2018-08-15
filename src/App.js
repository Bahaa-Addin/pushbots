import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import { history } from './helpers/browserHistory';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';
import './styles/css/App.css';

import {getUser} from './helpers/user';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/login" render={props => (
          getUser()
            ? <Redirect to={{pathname: '/', state: {from: props.location}}}/>
            : <Login {...props} />
        )}/>
        <Route exact path="/" render={props => (
          getUser()
            ? <Dashboard {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
      </Switch>
    </Router>
  </Provider>
);

export default App;