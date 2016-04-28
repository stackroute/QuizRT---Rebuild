import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopicPage from './TopicsPage.jsx';

import TournamentsContainer from './TournamentsContainer';
import BootCheck from './BootCheck';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

      <TopicPage />

  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('content'));
