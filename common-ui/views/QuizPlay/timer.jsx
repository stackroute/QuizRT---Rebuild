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
    var seconds = this.props.seconds;
    outerThis.state.seconds = seconds;
    // console.log(seconds+" "+this.state.seconds);

    var myTimer = setInterval(function(){
      outerThis.setState({seconds:outerThis.state.seconds-1});
      if(outerThis.state.seconds==0)
        clearInterval(myTimer);
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
