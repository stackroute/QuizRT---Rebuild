import React from 'react';

export default class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      seconds:props.seconds
    };
  }
  componentDidMount(){
    var outerThis = this;
    var i =0;
    var seconds = this.props.seconds;
    outerThis.state.seconds = seconds;
    var myTimer = setInterval(function(){
      i=i+1;
      outerThis.setState({seconds:outerThis.state.seconds-1});
      if(outerThis.state.seconds <= 0){
        if(i === 2){
          clearInterval(myTimer);
        }
        outerThis.setState({seconds:outerThis.props.seconds});

      }

    },1000);
  }
 render(){
  return (
    <h1>{this.state.seconds}</h1>
  );
 }
};
Timer.defaultProps={
  seconds:20
};
