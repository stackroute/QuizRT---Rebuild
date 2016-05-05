import React from 'react';
import ProfileHero from '../header/leftnav';
import RecentTabs from './recentpage';


var RecentPage = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileHero />
        <RecentTabs data={this.props.data}/>
      </div>
    );
  }
});

module.exports= RecentPage;
