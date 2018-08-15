import React, {Fragment} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CheckIcon from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/SettingsTwoTone';
import ShareIcon from '@material-ui/icons/Reply';
import BarChartIcon from '@material-ui/icons/BarChart';
import AppCard from './AppCard';
import '../styles/css/AppsTabs.css';

const TabContainer = ({apps}) => {
  if (apps) {
    const {data} = apps;
    return (
      <div className="appstabs__apps-container">
        {
          data.map(app => (
            <AppCard
              key={app._id}
              title={app.title}
              platforms={app.platforms}
              devices={app.devices}
              sharedBy={app.shared_by}
            />
          ))
        }
      </div>
    );
  } else {
    return <div></div>
  }
};

const AppsTabs = ({apps, filter, fetchApps}) => {
  const tabs = ['complete', 'inprogress', 'shared', 'active'];

  return (
    <Fragment>
        <Tabs
          value={tabs.indexOf(filter || 'complete')}
          onChange={(e, selected) => fetchApps(tabs[selected])}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<CheckIcon/>} label="COMPLETE" className="appstabs__tab"/>
          <Tab icon={<SettingsIcon/>} label="IN SETUP" className="appstabs__tab"/>
          <Tab icon={<ShareIcon/>} label="SHARED" className="appstabs__tab"/>
          <Tab icon={<BarChartIcon/>} label="ACTIVE" className="appstabs__tab"/>
        </Tabs>
      <TabContainer apps={apps}/>
    </Fragment>
  );
};


export default AppsTabs;
