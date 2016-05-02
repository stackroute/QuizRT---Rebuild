import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
<<<<<<< HEAD
 import Login from './login';
import NewPass from './setNewPass';
import Sign from './signup';
import VerifyOTP from './verifyOTP';
import ForgotPass from './forgotPass';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
=======

>>>>>>> Login Navigation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import TournamentView from './views/Tournament';
import TopicsView from './views/TopicsPage';

const DashboardView = () => <div>This is the dashboard.</div>

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={hashHistory}>
          <Route path="/" component={LoginView} />
          <Route path="/signup" component={SignupView} />
          <Route path="/topics" component={TopicsView} />
          <Route path="/tournament" component={TournamentView} />
         </Router>
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('content'));
