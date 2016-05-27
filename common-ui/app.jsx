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

import Result from './views/result';
import cookie from 'react-cookie';


export class App extends React.Component {
  constructor(props){
    super(props);
  }


  requireAuth(nextState, replace) {
    var token = cookie.load('auth_cookie');
    if(token == undefined){
      replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
    }
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
      <Route path="/" component={LoginForm} />
      <Route path = '/login' component = {LoginForm} />
      <Route path = '/forgotPswd' component = {ForgotPswd} />
      <Route path = '/setNewPswd' component = {SetNewPswd} />
      <Route path = '/verifyOTP' component = {VerifyOTP} />
      <Route path = '/signup' component = {SignUp} />
      
      <Route path="/rank" component={Rank} onEnter={this.requireAuth} />
      <Route path="/result" component={Result} onEnter={this.requireAuth} />
      <Route path="/quiz" component={Quiz} onEnter={this.requireAuth} />
      <Route path="/dashboard" component={Dashboard} onEnter={this.requireAuth} />
      <Route path="/tournament" component={TournamentsSubContainer} onEnter={this.requireAuth}/>
      <Route path="/topics" component={TopicsView} onEnter={this.requireAuth}/>
      <Route path = '/badges' component = {Badges} onEnter={this.requireAuth}/>
      <Route path= '/eachtopic' component={TopicDetails} onEnter={this.requireAuth}/>
      <Route path= '/alltopics' component={SubTopicContainer} onEnter={this.requireAuth}/>
      <Route path = '/recent' component={RecentPage} onEnter={this.requireAuth}/>
      </Router>
      </MuiThemeProvider>
    );
  }
};


ReactDOM.render(<App />, document.getElementById('content'));
