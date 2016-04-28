import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import NewPass from './setNewPass';
import signup from './signup1';
import VerifyOTP from './verifyOTP';
import ForgotPass from './forgotPass';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
     <signup />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('content'));
