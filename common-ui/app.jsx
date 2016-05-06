import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import LoginView from './views/LoginView';
import TournamentView from './views/Tournament';
import TopicsView from './views/TopicsPage';
// import ForgotPswd from './views/LoginView/forgotPswd';
// import VerifyOTP from './views/LoginView/verifyOTP';
// import SetNewPswd from './views/LoginView/setNewPswd';
import Badges from './views/Badges/Badges';

const DashboardView = () => <div>This is the dashboard.</div>

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
         <Router history={hashHistory}>


          <Route path="/topics" component={TopicsView} />
          <Route path="/tournament" component={TournamentView} />
            <Route path="/dashboard" component={DashboardView} />

         </Router>
       </MuiThemeProvider>
    );
  }
}
 ReactDOM.render(<App />, document.getElementById('content'));
