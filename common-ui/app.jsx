import React from 'react';
import ReactDOM from 'react-dom';
//import SubTopicContainer from './SubTopics/SubTopicContainer';
//import TournamentContainer from './TournamentContainer'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TopicPage from './TopicsPage/TopicsPage';

//import TournamentsContainer from './Tournament/TournamentsContainer';
//import SubCard  from './TopicsPage/SubCategoryCard';
import TournamentsSubContainer from './SubTournaments/TournamentsSubContainer';



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var topicsData =[{
  title: "Cricket",
  subtitle: "Let's play a cricket quiz",
  avatarImg: './SubTopics/imgs/avtar.jpg',
  img: './SubTopics/imgs/main.jpg',
  category: "Sports"

},
{
  title: "Chess",
  subtitle: "Let's play a chess quiz",
  avatarImg: './SubTopics/imgs/chavtar.jpg',
  img: './SubTopics/imgs/chesmain.jpg',
  category: "Sports"

},
{
  title: "Football",
  subtitle: "Let's play a football",
  avatarImg: './SubTopics/imgs/foavtar.jpeg',
  img: './SubTopics/imgs/footmain.jpg',
  category: "Sports"
},
{
  title: "Hockey",
  subtitle: "Let's play a hockey",
  avatarImg: './SubTopics/imgs/hoavtar.jpg',
  img: './SubTopics/imgs/homain.jpg',
  category: "Sports"
},
{
  title: "IndianHistory",
  subtitle: "Let's play history quiz",
  avatarImg: './SubTopics/imgs/hisavtar.jpg',
  img: './SubTopics/imgs/hismain.jpg',
  category: "History"
},
{
  title: "Monuments",
  subtitle: "Let's play a history quiz",
  avatarImg: './SubTopics/imgs/monavtar.jpg',
  img: './SubTopics/imgs/monmain.jpg',
  category: "History"
},
{
  title: "GraetLeaders",
  subtitle: "Let's play a history quiz",
  avatarImg: './SubTopics/imgs/leavtar.jpg',
  img: './SubTopics/imgs/lemain.png',
  category: "History"
},
{
  title: "WorldWars",
  subtitle: "Let's play a history quiz",
  avatarImg: './SubTopics/imgs/waravtar.jpg',
  img: './SubTopics/imgs/warmain.jpg',
  category: "History"
},
{
  title: "TvCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/tvavtar.jpg',
  img: './SubTopics/imgs/tvmain.jpg',
  category: "Celebreties"
},
{
  title: "HollywoodCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/hlavtar.jpg',
  img: './SubTopics/imgs/hlmain.jpg',
  category: "Celebreties"
},
{
  title: "IndianCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/inavtar.jpg',
  img: './SubTopics/imgs/inmain.jpg',
  category: "Celebreties"
},
{
  title: "PoliticalCelebs",
  subtitle: "Let's play a celeb quiz",
  avatarImg: './SubTopics/imgs/poavtar.jpg',
  img: './SubTopics/imgs/plmain.jpg',
  category: "Celebreties"
},{
  title: "Instruments",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/miavtar.jpg',
  img: './SubTopics/imgs/mimain.gif',
  category: "Music"
},
{
  title: "Albums",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/maavtar.jpg',
  img: './SubTopics/imgs/mamain.jpg',
  category: "Music"
},
{
  title: "Singers",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/siavtar.jpg',
  img: './SubTopics/imgs/simain.jpg',
  category: "Music"
},
{
  title: "Directors",
  subtitle: "Let's play a music quiz",
  avatarImg: './SubTopics/imgs/mdavtar.jpg',
  img: './SubTopics/imgs/mdmain.jpg',
  category: "Music"
}
];
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
  AvatarURL: './SubTournaments/images/monavtar.jpg',
  URL: './SubTournaments/images/monmain.jpeg',
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
  AvatarURL: './SubTournaments/images/celavtar.jpg',
  URL: './SubTournaments/images/celmain.jpg',
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
