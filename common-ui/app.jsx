import React from 'react';
import ReactDOM from 'react-dom';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// import RecentPage from './views/recent_activity/index';
import Dashboard from './views/dashboard/dashboard';
// import TopicSection from './views/dashboard/mostpopular';

var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

      <Dashboard />

  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('content'));
