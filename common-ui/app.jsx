import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CategoryPage from './layouts/TopicsPage/CategoryPage';

import TournamentsContainer from './layouts/Tournament/index';
import SubCard  from './layouts/TopicsPage/SubCategoryCard';





import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var muiTheme = getMuiTheme();

const App = () => (

  <MuiThemeProvider muiTheme={muiTheme}>

      <TournamentsContainer />

</MuiThemeProvider>

);

ReactDOM.render(<App />, document.getElementById('content'));
