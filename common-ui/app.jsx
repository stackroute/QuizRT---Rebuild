import React from 'react';
import ReactDOM from 'react-dom';
//import SubTopicContainer from './views/SubTopics/SubTopicContainer';
//import TournamentContainer from './views/TournamentContainer'

import { Router, Route, hashHistory } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TopicPage from './TopicsPage/TopicsPage';

//import TournamentsContainer from './Tournament/TournamentsContainer';
//import SubCard  from './TopicsPage/SubCategoryCard';
import TournamentsSubContainer from './views/SubTournaments/TournamentsSubContainer';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarImg: './img/topic/avtar.jpg',
  img: './img/topic/main.jpg',
  category: "Sports"

},
{
  title: "Chess",
  subtitle: "Let's play a chess quiz",
  avatarImg: './img/topic/chavtar.jpg',
  img: './img/topic/chesmain.jpg',
  category: "Sports"

},
{
  title: "Football",
  subtitle: "Let's play a football",
  avatarImg: './img/topic/foavtar.jpeg',
  img: './img/topic/footmain.jpg',
  category: "Sports"
},
{
  title: "Hockey",
  subtitle: "Let's play a hockey",
  avatarImg: './img/topic/hoavtar.jpg',
  img: './img/topic/homain.jpg',
  category: "Sports"
},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
  avatarImg: './img/topic/hisavtar.jpg',
  img: './img/topic/hismain.jpg',
  category: "History"
},
{
  title: "Monuments",
  subtitle: "Let's play a history quiz",
  avatarImg: './img/topic/monavtar.jpg',
  img: './img/topic/monmain.jpg',
  category: "History"
},
{
  title: "GreatLeaders",
  subtitle: "Let's play a history quiz",
  avatarImg: './img/topic/leavtar.jpg',
  img: './img/topic/lemain.png',
  category: "History"
},
{
  title: "WorldWars",
  subtitle: "Let's play a history quiz",
  avatarImg: './img/topic/waravtar.jpg',
  img: './img/topic/warmain.jpg',
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './img/topic/tvavtar.jpg',
  img: './img/topic/tvmain.jpg',
  category: "Celebreties"
},
{
  title: "Hollywood",
  subtitle: "Let's play celeb quiz",
  avatarImg: './img/topic/hlavtar.jpg',
  img: './img/topic/hlmain.jpg',
  category: "Celebreties"
},
{
  title: "IndianCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './img/topic/inavtar.jpg',
  img: './img/topic/inmain.jpg',
  category: "Celebreties"
},
{
  title: "PoliticalCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './img/topic/poavtar.jpg',
  img: './img/topic/plmain.jpg',
  category: "Celebreties"
},{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/miavtar.jpg',
  img: './img/topic/mimain.gif',
  category: "Music"
},
{
  title: "Albums",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/maavtar.jpg',
  img: './img/topic/mamain.jpg',
  category: "Music"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/siavtar.jpg',
  img: './img/topic/simain.jpg',
  category: "Music"
},
{
  title: "Directors",
  subtitle: "Let's play a music quiz",
  avatarImg: './img/topic/mdavtar.jpg',
  img: './img/topic/mdmain.jpg',
  category: "Music"
}
];
var tournamentData =[
  {
    title: "Sports Quiz",
  AvatarURL: './img/tournaments/tournamentAvatar.jpg',
  URL: './img/tournaments/sports-balls.jpg',
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
  AvatarURL: './img/tournaments/muavtar.png',
  URL: './img/tournaments/mumain.jpg',
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
  AvatarURL: './img/tournaments/monavtar.jpg',
  URL: './img/tournaments/monmain.jpeg',
  OverlayTitle: 'Great monuments',
  OverlaySubtitle: 'Let us explore the monuments.',
  TabContent:{
  description: "This is a monuments quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000"
}
},
{
  title: "Celeb Quiz",
  AvatarURL: './img/tournaments/celavtar.jpg',
  URL: './img/tournaments/celmain.jpg',
  OverlayTitle: 'Celebreties',
  OverlaySubtitle: 'Let us play quiz on celebs.',
  TabContent:{
  description: "This is a celebrety quiz. Battle with other players to achieve glory.The quiz contains of 20 questions from various categories in music.",
  rules: "The quiz consists of 20 questions. Quicker answers get you more marks.",
  prizes: "Rs. 2000"
}
}
];

var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>


<TournamentsSubContainer tournament={tournamentData}/>




  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('content'));
