import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TopicPage from './div.jsx';

import TournamentsContainer from './TournamentsContainer';
import BootCheck from './BootCheck';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// import {Card, CardHeader, CardText} from 'material-ui/Card';
// import ProfileHero from './header/leftnav';
// import RecentTabs from './recent_activity/recent';
// import Recentcard from './recent_activity/recentcard';
import RecentPage from './recent_activity/recentpage';

var data=[
  {
    title:"Rohith",
    subtitle: "My rules, So I don't care",
    avatar:"img/photo.jpg",
  },
  {
    title:"Shikar",
    subtitle: "My rules, So I don't care",
    avatar:"img/photo.jpg",
  },
  {
    title:"Anshul",
    subtitle: "My rules, So I don't care",
    avatar:"img/photo.jpg",
  },
  {
    title:"Komali",
    subtitle: "My rules, So I don't care",
    avatar:"img/photo.jpg",
  },
  {
    title:"Deepak",
    subtitle: "My rules, So I don't care",
    avatar:"img/photo.jpg",
  },
  {
    title:"Bhavar",
    subtitle: "My rules, So I don't care",
    avatar:"img/photo.jpg",
  },
];

var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

      <RecentPage />

  </MuiThemeProvider>
);

ReactDOM.render(<App data={data}/>, document.getElementById('content'));
