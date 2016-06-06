import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TournamentsSubContainer from '../SubTournaments/TournamentsSubContainer';

const style = {
  marginLeft:0,
  marginTop:20,
  marginBottom:20,
  marginRight:0,
};

const stylebtn={
  float:'none',
  width:'100%',

}

const cardHeader={
  textAlign:'left',
};

const tour_header={
  margin:20,
  textAlign:'center',
  paddingTop:20,
}

var tournamentData =[
  {
    title: "Sports Quiz",
  AvatarURL: 'img/tournaments/tournamentAvatar.jpg',
  URL: 'img/tournaments/sports-balls.jpg',
  OverlayTitle: 'Sports Battle 101',
  OverlaySubtitle: 'Let the sports battle begin.',
  TabContent:{
  description: "This is a sports quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various sports and games.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000"
}
},
{
  title: "Music Quiz",
  AvatarURL: 'img/tournaments/muavtar.png',
  URL: 'img/tournaments/mumain.jpg',
  OverlayTitle: 'Musical feast',
  OverlaySubtitle: 'Let us enjoy the music.',
  TabContent:{
  description: "This is a music quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000"
}
},
{
  title: "Monuments Quiz",
  AvatarURL: 'img/tournaments/monavtar.jpg',
  URL: 'img/tournaments/monmain.jpg',
  OverlayTitle: 'Great monuments',
  OverlaySubtitle: 'Let us explore the monuments.',
  TabContent:{
  description: "This is a monuments quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000"
}
}
];

var TournamentSection = React.createClass({
  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
          <h1 style={tour_header}>Tournaments</h1>
            <TournamentsSubContainer tournament={tournamentData}/>
            <FlatButton label="See More" style={stylebtn}/>
          </Card>
        </Paper>
      </div>
    );
  }
});

export default TournamentSection;
