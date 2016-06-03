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
  AvatarURL: 'https://photos-6.dropbox.com/t/2/AACxyiMtiejBab9eKzRlFi7e-Q7KDtyt8I3YIzXqPuiguw/12/381306162/jpeg/32x32/1/_/1/2/tournamentAvatar.jpg/EJC5hIQDGAogAigC/fjDTjF-_yBi_jDER0a6HMpFLtFB4RJwsuuu3kOM_P1Y?size=1600x1200&size_mode=3',
  URL: 'https://photos-4.dropbox.com/t/2/AABCs0huXk1d-GwDqhHT6zfmBMdYp8ntCULpl_IJQvbGdA/12/381306162/jpeg/32x32/1/_/1/2/sports-balls.jpg/EJC5hIQDGAogAigC/H_nnQS2PN09u3OeXb8QArP0uRGDhUFVspTAVZ23upH8?size=1600x1200&size_mode=3',
  OverlayTitle: 'Sports Battle 101',
  OverlaySubtitle: 'Let the sports battle begin.',
  TabContent:{
  description: "This is a sports quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various sports and games.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000",
  startDate:"05-JUN 2016",
  endDate:"07-JUN 2016"
}
},
{
  title: "Music Quiz",
  AvatarURL: 'https://photos-2.dropbox.com/t/2/AAC30mT7je9f5sSDKJLuGFGxaANTwtF4dMJwjTkq7U05vw/12/381306162/png/32x32/1/_/1/2/muavtar.png/EJC5hIQDGAogAigC/uS7sTeEzxFtxT8y84BYcI3WLifpHAQPjAefqDYeCzkY?size=1600x1200&size_mode=3',
  URL: 'https://photos-4.dropbox.com/t/2/AACpirtDDpE0JTbIDGcUkvOahPIQBk9kTX3j6sqvDDKQQw/12/381306162/jpeg/32x32/1/_/1/2/mumain.jpg/EJC5hIQDGAogAigC/DD4Tf-4ZAR6XpIjx1JLyldZIrvmyLEQwV3CTftT8DQQ?size=1600x1200&size_mode=3',
  OverlayTitle: 'Musical feast',
  OverlaySubtitle: 'Let us enjoy the music.',
  TabContent:{
  description: "This is a music quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000",
  startDate:"12-JUN 2016",
  endDate:"16-JUN 2016"
}
},
{
  title: "Monuments Quiz",
  AvatarURL: 'https://photos-1.dropbox.com/t/2/AACjS1TYyzRUcpMDBHjT6cAJC-iuImtVtUsNkmoslMLpJA/12/381306162/jpeg/32x32/1/_/1/2/monavtar.jpg/EJC5hIQDGAogAigC/-L2aUQiBDLkmpYdx40clg7fDdAeFs_4xmh74xW0j60o?size=1600x1200&size_mode=3',
  URL: 'https://photos-5.dropbox.com/t/2/AACoJ67MozufHsObQkBQlQp4xvRjBExqjV7lcWX0E0PLFQ/12/381306162/jpeg/32x32/1/_/1/2/monmain.jpg/EJC5hIQDGAogAigC/_GE588pABO3KTL0wQ9tjvogfIoMqPZUx64XWq9QSYJ0?size=1600x1200&size_mode=3',
  OverlayTitle: 'Great monuments',
  OverlaySubtitle: 'Let us explore the monuments.',
  TabContent:{
  description: "This is a monuments quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000",
  startDate:"04-JUN 2016",
  endDate:"09-JUN 2016"
}
}
];

var TournamentSection = React.createClass({

  getInitialState:function(){
      return{tournamentData:[]}
  },

  contextTypes :{
    router : React.PropTypes.object
  },

  handleTournaments : function(){
    event.preventDefault();
    this.context.router.push('/alltournaments');
  },

  componentDidMount:function(){
    $.ajax({
      url: baseurl+'/tournamentSection',
      dataType:'json',
      success: function(data){
        console.log('got success---------------------');
        console.log(JSON.stringify(data));
        this.setState({tournament:data})
        console.log('------------------------'+data+'----------------------');
      }.bind(this),
      error:function(err){
        console.log(err);
        console.log('error');
      }
    })
  },

  render: function () {
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <Card>
          <h1 style={tour_header}>Tournaments</h1>
            <TournamentsSubContainer tournament={this.state.tournamentData}/>
            <FlatButton label="See More" style={stylebtn}
              onTouchTap={this.handleTournaments.bind(this)}/>
          </Card>
        </Paper>
      </div>
    );
  }
});

export default TournamentSection;
