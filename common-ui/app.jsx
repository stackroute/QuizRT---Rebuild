import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, hashHistory} from 'react-router';
import LoginForm from './views/LoginView';
import ForgotPswd from './views/LoginView/forgotPswd';
import VerifyOTP from './views/LoginView/verifyOTP';
import SetNewPswd from './views/LoginView/setNewPswd';

export class App extends React.Component{
  render(){
    return(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <Router history = {hashHistory}>
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
