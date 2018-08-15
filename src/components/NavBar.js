import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/IconButton';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import '../styles/css/NavBar.css';

import {getUser} from '../helpers/user';

library.add(faUsers);

const styles = theme => ({
  root: {
    flexGrow: 1, }, flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

const NavBar = props => {
  const {classes, totalApps} = props;
  const user = getUser();
    const formatNumber = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
      <div className={classNames(classes.root, 'navbar__container')}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <div className={classes.flex}>
              <img src="/assets/images/logo.svg" className="navbar__logo" alt="Logo"/>
            </div>
            {user && (
              <div className="navbar__menu-bar-right-info">
                <div className={classNames(classes.margin, 'navbar__users-icon')}>
                  <SvgIcon className="navbar__users-info">
                    <FontAwesomeIcon icon="users" />
                  </SvgIcon>
                  <Typography gutterBottom noWrap color="inherit" className={classNames(classes.flex, 'navbar__users-info')}>
                    {formatNumber(25883)}
                  </Typography>
                </div>
                <Badge className={classes.margin} badgeContent={totalApps||0} color="secondary">
                  <AppsIcon />
                </Badge>
                <Typography variant="title" color="inherit" className={classNames(classes.flex, 'navbar__account-name')}>
                  {user.name}
                </Typography>
                <Icon
                  aria-owns='account-photo'
                  aria-haspopup="true"
                  color="inherit"
                  className="navbar__account-photo"
                />
                <IconButton
                  aria-owns='more'
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreVertIcon/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  // anchorEl={moreActions}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={false}
                  onClose={this.handleClose}
                >
                  <MenuItem
                    onClick={this.handleClose}
                    className="navbar__menu-item"
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
