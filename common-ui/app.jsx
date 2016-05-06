import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import getMuiTheme from 'material-ui/styles/getMuiTheme'
=======

import getMuiTheme from 'material-ui/styles/getMuiTheme';
>>>>>>> bb2fcdeb142ce1e62dddb7e81008ce3048495069
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
<<<<<<< HEAD
<<<<<<< HEAD
import LoginView from './views/LoginView';
import TournamentView from './views/Tournament';
import TopicsView from './views/TopicsPage';
import {Router, Route, hashHistory} from 'react-router';
import LoginForm from './views/LoginView';
import ForgotPswd from './views/LoginView/forgotPswd';
import VerifyOTP from './views/LoginView/verifyOTP';
import SetNewPswd from './views/LoginView/setNewPswd';
import Badges from './views/Badges/Badges';
=======
>>>>>>> bb2fcdeb142ce1e62dddb7e81008ce3048495069
injectTapEventPlugin();
=======
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Config from './views/QuizPlay'
var muiTheme = getMuiTheme();
>>>>>>> 450f09f... Cleaned and refactored code

<<<<<<< HEAD
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Config />
  </MuiThemeProvider>
);

<<<<<<< HEAD
=======
import { Router, Route, hashHistory} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUP from './views/SignUP';
import Quiz from './views/QuizPlay';
import Result from './views/Result';
import Pro from './pro';
injectTapEventPlugin();
>>>>>>> 7811a1c... commit the changes
export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
<<<<<<< HEAD
        <Router history={hashHistory}>
          <Route path="/dashboard" component={DashboardView} />
          <Route path="/" component={LoginView} />
          <Route path="/login" component={LoginView} />
          <Route path="/tournament" component={TournamentView} />
          <Route path="/topics" component={TopicsView} />
          <Route path = '/' component = {LoginForm} />
          <Route path = '/forgotPswd' component = {ForgotPswd} />
          <Route path = '/setNewPswd' component = {SetNewPswd} />
          <Route path = '/verifyOTP' component = {VerifyOTP} />
        </Router>
=======
      <Router history={hashHistory}>
        <Route path="/signup" component={SignUP} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />
      </Router>
>>>>>>> 7e03cac... Refactor
      </MuiThemeProvider>
    );
  }
};
=======
import RecentPage from './views/recent_activity/index';
import Dashboard from './views/dashboard/dashboard';
import TopicSection from './views/dashboard/mostpopular';

var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

      <Dashboard />

  </MuiThemeProvider>
);
>>>>>>> bb2fcdeb142ce1e62dddb7e81008ce3048495069


=======

>>>>>>> 450f09f... Cleaned and refactored code
ReactDOM.render(<App />, document.getElementById('content'));
