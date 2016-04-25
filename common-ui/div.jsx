import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var DivComponent = React.createClass({
  render: function() {
    var b = <RaisedButton label="Hello, React!" />;
    console.log('b: ' + b);
    return (
      b
    );
  }
});

module.exports = DivComponent;