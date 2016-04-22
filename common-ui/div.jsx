var RaisedButton = require('material-ui/lib/raised-button')

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