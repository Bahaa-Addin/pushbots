import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import SendIcon from '@material-ui/icons/Send';
import RestoreIcon from '@material-ui/icons/Restore';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import SettingsIcon from '@material-ui/icons/SettingsTwoTone';
import BarChartIcon from '@material-ui/icons/BarChart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faShare} from '@fortawesome/free-solid-svg-icons';

import '../styles/css/AppCard.css';

library.add(faUsers, faShare);

const styles = theme => ({
  card: {
    maxWidth: '100%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

const RenderPlatforms = (props) => {
  const {platforms, classes} = props;

  const platformsIcons = {
    chrome: <Icon className={classNames(classes.icon, 'fab fa-chrome appcard__platform-icon')}
                  key="platformicon__chrome"/>,
    android: <Icon className={classNames(classes.icon, 'fab fa-android appcard__platform-icon')}
                   key="platformicon__android"/>,
    ios: <Icon className={classNames(classes.icon, 'fab fa-apple appcard__platform-icon')} key="platformicon__ios"/>,
    firefox: <Icon className={classNames(classes.icon, 'fab fa-firefox appcard__platform-icon')}
                   key="platformicon__firefox"/>,
    opera: <Icon className={classNames(classes.icon, 'fab fa-opera appcard__platform-icon')}
                 key="platformicon__opera"/>,
  };

  return (
    Object.keys(platforms).map(p => platformsIcons[p])
  )
};

const AppCard = props => {
  const {classes, title, platforms, devices, sharedBy} = props;

  return (
    <Card className={classNames(classes.card, 'appcard__wrapper')}>
      <CardHeader
        action={
          <div>
            <Tooltip title={`Shared by ${sharedBy}`}>
              <IconButton aria-label="Shared By">
                <SvgIcon>
                  <FontAwesomeIcon icon="share" className="appcard__share-icon"/>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
        }
        title={title}
        className="appcard__header"
      />
      <CardContent className="appcard__content">
        <Typography className={classes.pos} color="textSecondary">
          <i className="fas fa-mobile-alt"></i> {devices} active
        </Typography>
        <RenderPlatforms platforms={platforms} classes={classes}></RenderPlatforms>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Send">
          <SendIcon/>
        </IconButton>
        <IconButton aria-label="Restore">
          <RestoreIcon/>
        </IconButton>
        <IconButton aria-label="Phones">
          <SmartphoneIcon/>
        </IconButton>
        <IconButton aria-label="Users">
          <SvgIcon>
            <FontAwesomeIcon icon="users"/>
          </SvgIcon>
        </IconButton>
        <IconButton aria-label="Settings">
          <SettingsIcon/>
        </IconButton>
        <IconButton aria-label="Stats">
          <BarChartIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

AppCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppCard);