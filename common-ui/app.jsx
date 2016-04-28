import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

<<<<<<< HEAD
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

=======
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ProfileHero from './header/leftnav'
var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <ProfileHero />
  </MuiThemeProvider>
);

>>>>>>> Dashboard header
ReactDOM.render(<App />, document.getElementById('content'));
