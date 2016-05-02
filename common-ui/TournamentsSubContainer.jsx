import React from 'react';
import TournamentsSubCard from './TournamentsSubCard';

// var tournamentData ={
//   title: "Sports Quiz",
//   AvatarURL: './images/tournamentAvatar.jpg',
//   URL: './images/sports-balls.jpg',
//   OverlayTitle: 'Sports Battle 101',
//   OverlaySubtitle: 'Let the sports battle begin.',
//   TabContent:{
//   description: "This is a sports quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various sports and games.",
//   rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
//   prizes: "Rs. 2000"
// }
// };
var TournamentsSubContainer = React.createClass({

  render: function(){
    var allTheSubTopics = [];
    this.props.tournament.forEach(function(tournament){
      allTheSubTopics.push(<TournamentsSubCard tournament={tournament} key={tournament.title}/>)
    })
    return(
      <div>
      {allTheSubTopics}
      </div>
    );
  }

});


export default TournamentsSubContainer;
