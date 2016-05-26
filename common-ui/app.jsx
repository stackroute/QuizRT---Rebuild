import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TournamentView from './views/Tournament';
import TopicsView from './views/TopicsPage';
import {Router, Route, hashHistory} from 'react-router';
import LoginForm from './views/Login';
import ForgotPswd from './views/Forgot';
import VerifyOTP from './views/OTP';
import SetNewPswd from './views/SetPswd';
import Badges from './views/Badges/Badges';
import Result from './views/Result'
import Dashboard from './views/dashboard/dashboard';
import TopicDetails from './views/EachTopic/EachTopic';
import TournamentsSubContainer from './views/SubTournaments/TournamentsSubContainer';
import SubTopicContainer from './views/SubTopics/SubTopicContainer';
import SignUp from './views/SignUP';
import RecentPage from './views/recent_activity';
import Quiz from './views/QuizPlay'
import Rank from './views/Rank';
injectTapEventPlugin();

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/rank" component={Rank} />

      <Route path="/tournament" component={TournamentsSubContainer} />
      <Route path="/result" component={Result} />

      <Route path="/" component={LoginForm} />
      <Route path="/quiz" component={Quiz} />

      <Route path="/topics" component={TopicsView} />
      <Route path = '/login' component = {LoginForm} />
      <Route path = '/forgotPswd' component = {ForgotPswd} />
      <Route path = '/setNewPswd' component = {SetNewPswd} />
      <Route path = '/verifyOTP' component = {VerifyOTP} />
      <Route path = '/badges' component = {Badges} />
      <Route path = '/signup' component = {SignUp} />
      <Route path= '/eachtopic' component={TopicDetails} />
      <Route path= '/alltopics' component={SubTopicContainer} />
      <Route path = '/recent' component={RecentPage} />
      </Router>
      </MuiThemeProvider>
    );
  }
};


ReactDOM.render(<App />, document.getElementById('content'));
