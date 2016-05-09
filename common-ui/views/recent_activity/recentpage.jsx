import {Tabs, Tab} from 'material-ui/Tabs';
import React from 'react';
import Recentcard from './recentcard';
import PersonalInfo from './personalinfo';
import RecentcardInfo from './recent';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 0,
  },
};

const styler = {
  textAlign : 'center',
};

const div={
  overflow:'hidden',
};

const style = {
  margin: 5,
};

var RecentTabs = React.createClass({

render: function(){

return (

  <div>
    <Tabs>
      <Tab label="Recent Activity">
          <RecentcardInfo/>
      </Tab>
      <Tab label="Personal Info">
          <PersonalInfo/>
      </Tab>
    </Tabs>
  </div>
);
}
});
module.exports = RecentTabs;
