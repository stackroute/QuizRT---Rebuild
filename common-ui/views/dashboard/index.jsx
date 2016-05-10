import React from 'react';
import ProfileHero from '../header/leftnav';
import TournamentSection from './tournamentsection';
import QuizWar from './quizwar';
import MostPopularSection from './mostpopular';
import MyFavoriteSection from './myfavoritetopics';

var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileHero />
        <TournamentSection/>
        <QuizWar />
        <MostPopularSection />
        <MyFavoriteSection />
      </div>
    );
  }
});
export default Dashboard;
