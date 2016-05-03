import React from 'react';
import ProfileHero from '../views/header/leftnav';
import RecentTabs from '../recent_activity/recent';

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
