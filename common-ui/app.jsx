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



var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

      <RecentPage />

  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('content'));
