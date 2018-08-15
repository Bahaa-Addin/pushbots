import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import '../styles/css/Login.css';

import {userActions} from '../redux/actions/userActions';

const mapStateToProps = (state) => {
  const {loggingIn} = state.user;
  return {
    loggingIn
  };
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit * 5,
    width: 200
  },
});

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

  }

  state = {
    email: '',
    password: '',
    showPassword: false,
    submitted: false,
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({showPassword: !state.showPassword}));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({submitted: true});
    const {email, password} = this.state;
    const {dispatch} = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  componentDidMount = () => {
  }

  render() {
    const {logginngIn, classes} = this.props;
    const { email, password, showPassword, submitted } = this.state;

    return (
      <div className="login__container">
        <Paper
          className={classNames(classes.paper, 'login__paper')}
          elevation={2}
        >
          <div className="login__logo">
            <img src="/assets/images/logo.svg" className="login__logo" alt="Logo"/>
          </div>
          <FormControl className={classNames(classes.textField, 'login__form')}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl className={classNames(classes.margin, classes.textField, 'login__form')}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="extendedFab"
            aria-label="Delete"
            className={classes.button}
            disabled={logginngIn}
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledLogin = withStyles(styles)(Login);
export default connect(mapStateToProps)(styledLogin);
