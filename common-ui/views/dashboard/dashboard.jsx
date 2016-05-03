import React from 'react';
import ProfileHero from '../header/leftnav';
import TournamentSection from './tournamentsection';

var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileHero />
        <TournamentSection/>
      </div>
    );
  }
});

module.exports= Dashboard;
