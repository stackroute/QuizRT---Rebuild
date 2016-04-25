import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {Card, CardHeader, CardText} from 'material-ui/Card';

var muiTheme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Card>
      <CardHeader title="Title" subtitle="Subtitle" addAsExpander={true} showExpandableButton={true} />
      <CardText expandable={true}>
        Card Text.
      </CardText>
    </Card>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('content'));