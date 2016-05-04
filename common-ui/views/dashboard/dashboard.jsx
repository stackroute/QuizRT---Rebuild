import React from 'react';
import ProfileHero from '../header/leftnav';
import TournamentSection from './tournamentsection';
import QuizWar from './quizwar';

var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileHero />
        <TournamentSection/>
        <QuizWar />
      </div>
    );
  }
});

module.exports= Dashboard;
