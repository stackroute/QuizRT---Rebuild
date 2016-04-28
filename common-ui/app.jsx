import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {Card, CardHeader, CardText} from 'material-ui/Card';
import ProfileHero from './header/leftnav'
var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
  	<ProfileHero />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('content'));
