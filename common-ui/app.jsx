import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
<<<<<<< HEAD
import TournamentView from './views/Tournament';
import TopicsView from './views/TopicsPage';




import ResultView from './views/ResultView';


const DashboardView = () => <div>This is the dashboard.</div>

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
 
        <Route path="/" component={TopicsView} />
        <Route path="/signup" component={SignupView} />
        <Route path="/topics" component={TopicsView} />
        <Route path="/tournament" component={TournamentView} />




        <Route path="/login" component={LoginView} />

        <Route path="/dashboard" component={DashboardView} />
        <Route path="/result" component={ResultView} />

      </Router>
      </MuiThemeProvider>
    );
  }
};
<<<<<<< HEAD

=======
>>>>>>> 6fb14040edd7d4b56883d89a51ff97fc1cac643a
ReactDOM.render(<App />, document.getElementById('content'));
