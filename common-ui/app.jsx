import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUP from './views/SignUP';
import Quiz from './views/QuizPlay';
import Result from './views/Result';
injectTapEventPlugin();
var muiTheme = getMuiTheme();
export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
        <Route path="/signup" component={SignUP} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/" component={Result} />

      </Router>
      </MuiThemeProvider>
    );
  }
};
ReactDOM.render(<App />, document.getElementById('content'));
