import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Lolo from './views/LoginView';




var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
     <Lolo/>
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('content'));
