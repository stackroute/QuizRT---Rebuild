import React from 'react';
import ProfileHero from '../header/leftnav';
import RecentTabs from './recentpage';

const title={
    textAlign:'center',
}

var RecentPage = React.createClass({
  render: function () {
    return (
      <div>

        <ProfileHero />
        <h1 style={title}>Recent Activity</h1>
        <RecentTabs data={this.props.data}/>
      </div>
    );
  }
});

module.exports= RecentPage;
