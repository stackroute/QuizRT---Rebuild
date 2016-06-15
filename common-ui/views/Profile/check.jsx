import React from 'react';
// import ReactDOM from 'react-dom';

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 10};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    if(this.state.secondsElapsed==0)
    clearInterval(this.interval);
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  render: function() {
    return (
      <div id="example">Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

export default Timer;
