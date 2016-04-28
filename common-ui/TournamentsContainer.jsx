import React from 'react';
import TournamentCard from './TournamentCard';

var tournamentData ={
  title: "Sports Quiz",
  AvatarURL: './images/tournamentAvatar.jpg',
  URL: './images/sports-balls.jpg',
  OverlayTitle: 'Sports Battle 101',
  OverlaySubtitle: 'Let the sports battle begin.',
  TabContent:{
  description: "This is a sports quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various sports and games.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000"
}
};
var TournamentsContainer = React.createClass({

  render: function(){
    return(
    <TournamentCard tournament={tournamentData}/>
    );
  }

});

module.exports = TournamentsContainer;
