import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import AppsTabs from '../components/AppsTabs';
import '../styles/css/Dashboard.css';

import {appService} from '../services/appService';

const mapStateToProps = (state) => {
  const {loggingIn} = state.app;
  return {
    loggingIn
  };
};

class Dashboard extends Component {
  state = {
    data: {},
    appsFilter: ''
  };

  fetchAllData = async () => {
    const data = await appService.getInit();
    const {appsFilter} = data;
    this.setState({
      appsFilter,
      data
    });
  };

  fetchApps = async (filter) => {
    this.setState({appsFilter: filter});
    const data = await appService.getByFilter(filter);
    this.setState({data});
  }

  componentDidMount = () => {
    this.fetchAllData();
  }

  render() {
    const {data, appsFilter} = this.state;
    return (
      <div className="dashboard__container">
        <NavBar
          totalApps={data.totalApps}
        />
        <AppsTabs
          apps={data.apps}
          fetchApps={this.fetchApps}
          filter={appsFilter}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
};

export default Dashboard;
