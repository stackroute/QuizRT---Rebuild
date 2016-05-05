import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginView from './views/LoginView';
import TournamentView from './views/Tournament';
import TopicsView from './views/TopicsPage';
import {Router, Route, hashHistory} from 'react-router';
import LoginForm from './views/LoginView';
import ForgotPswd from './views/LoginView/forgotPswd';
import VerifyOTP from './views/LoginView/verifyOTP';
import SetNewPswd from './views/LoginView/setNewPswd';
import Badges from './views/Badges/Badges';
injectTapEventPlugin();

const DashboardView = () => <div>This is the dashboard.</div>

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
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
      </MuiThemeProvider>
    );
  }
};


ReactDOM.render(<App />, document.getElementById('content'));
