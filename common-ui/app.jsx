import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var DivComponent = require('./div');

ReactDOM.render(<DivComponent />, document.getElementById('content'));