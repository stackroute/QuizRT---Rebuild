//Sample Data to be passed. Put it inside the parent container of this.
// var tournamentData =[
//   {
//     title: "Sports Quiz",
//   AvatarURL: './SubTournaments/images/tournamentAvatar.jpg',
//   URL: './SubTournaments/images/sports-balls.jpg',
//   OverlayTitle: 'Sports Battle 101',
//   OverlaySubtitle: 'Let the sports battle begin.',
//   TabContent:{
//   description: "This is a sports quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various sports and games.",
//   rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
//   prizes: "Rs. 2000"
// }
// },
// {
//   title: "Music Quiz",
//   AvatarURL: './SubTournaments/images/muavtar.png',
//   URL: './SubTournaments/images/mumain.jpg',
//   OverlayTitle: 'Musical feast',
//   OverlaySubtitle: 'Let us enjoy the music.',
//   TabContent:{
//   description: "This is a music quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
//   rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
//   prizes: "Rs. 2000"
// }
// },
// {
//   title: "Monuments Quiz",
//   AvatarURL: './SubTournaments/images/monavtar.jpg',
//   URL: './SubTournaments/images/monmain.jpeg',
//   OverlayTitle: 'Great monuments',
//   OverlaySubtitle: 'Let us explore the monuments.',
//   TabContent:{
//   description: "This is a monuments quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
//   rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
//   prizes: "Rs. 2000"
// }
// },
// {
//   title: "Celeb Quiz",
//   AvatarURL: './SubTournaments/images/celavtar.jpg',
//   URL: './SubTournaments/images/celmain.jpg',
//   OverlayTitle: 'Celebreties',
//   OverlaySubtitle: 'Let us play quiz on celebs.',
//   TabContent:{
//   description: "This is a celebrety quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
//   rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
//   prizes: "Rs. 2000"
// }
// }
// ];


import React from 'react';
import TournamentsSubCard from './TournamentsSubCard';
var TournamentsSubContainer = React.createClass({

  render: function(){
    var allTheSubTopics = [];
    this.props.tournament.forEach(function(tournament){
      allTheSubTopics.push(
        <div className="col-xs-12 col-lg-4 col-md-6 col-sm-6">
        <TournamentsSubCard tournament={tournament} key={tournament.title}/>
        </div>
      );
    })
    return(
      <div className="container-fluid">
      <div className="row">
      {allTheSubTopics}
      </div>
      </div>
    );
  }

});


module.exports = TournamentsSubContainer;
