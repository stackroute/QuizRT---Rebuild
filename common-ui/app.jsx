import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopicPage from './TopicsPage/TopicsPage';

import TournamentsContainer from './Tournament/TournamentsContainer';
import SubCard  from './TopicsPage/SubCategoryCard';




import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

      <SubCard tournament={tournamentData}/>

  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('content'));
