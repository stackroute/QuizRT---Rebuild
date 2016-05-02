import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import ResultView from './views/ResultView';

const DashboardView = () => <div>This is the dashboard.</div>

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
        <Route path="/dashboard" component={DashboardView} />
        <Route path="/abc" component={ResultView} />
      </Router>
      </MuiThemeProvider>
    );
  }
};
ReactDOM.render(<App />, document.getElementById('content'));
