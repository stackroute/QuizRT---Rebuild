import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import {Card, CardHeader, CardText} from 'material-ui/Card';
// import ProfileHero from './header/leftnav';
// import RecentTabs from './recent_activity/recent';
// import Recentcard from './recent_activity/recentcard';
import RecentPage from './recent_activity/recentpage';



var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

      <RecentPage />

  </MuiThemeProvider>
);

//
// import LoginView from './views/LoginView';
// import SignupView from './views/SignupView';
// import ResultView from './views/ResultView';
//
// const DashboardView = () => <div>This is the dashboard.</div>
//
// export class App extends React.Component {
//   render() {
//     return (
//       <MuiThemeProvider muiTheme={getMuiTheme()}>
//       <Router history={hashHistory}>
//         <Route path="/login" component={LoginView} />
//         <Route path="/signup" component={SignupView} />
//         <Route path="/dashboard" component={DashboardView} />
//         <Route path="/abc" component={ResultView} />
//       </Router>
//       </MuiThemeProvider>
//     );
//   }
// };
// >>>>>>> dev
ReactDOM.render(<App />, document.getElementById('content'));
