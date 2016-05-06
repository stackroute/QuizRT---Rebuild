import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TournamentsSubContainer from '../SubTournaments/TournamentsSubContainer';

const style = {
  margin: 20,
  textAlign: 'center',
};

const stylebtn={
  float:'right',
};

const card={
  textAlign:'left',
  fontSize: 20,
  marginLeft:20,
};
var tournamentData =[
  {
    title: "Sports Quiz",
  AvatarURL: './SubTournaments/images/tournamentAvatar.jpg',
  URL: './SubTournaments/images/sports-balls.jpg',
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
  AvatarURL: './SubTournaments/images/muavtar.png',
  URL: './SubTournaments/images/mumain.jpg',
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
  AvatarURL: '../SubTournaments/images/monavtar.jpg',
  URL: '../SubTournaments/images/monmain.jpeg',
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
          <CardActions>
            <RaisedButton label="See More >>" style={stylebtn}/>
          </CardActions>
            <CardHeader style={card}
               title="Tournaments"
            />
            <TournamentsSubContainer tournament={tournamentData}/>

          </Card>
        </Paper>
      </div>
    );
  }
});

module.exports= TournamentSection;
