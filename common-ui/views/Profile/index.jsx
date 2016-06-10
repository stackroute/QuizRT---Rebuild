import {Tabs, Tab} from 'material-ui/Tabs';
import React from 'react';
import PersonalInfo from './personalinfo';
import ProfileHero from '../header/leftnav';


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

var ProfileInfo = React.createClass({

render: function(){

return (

  <div>
          <ProfileHero />
          <PersonalInfo/>
  </div>
);
}
});
module.exports = ProfileInfo;
