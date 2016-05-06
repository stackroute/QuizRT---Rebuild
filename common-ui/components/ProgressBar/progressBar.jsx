import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class ProgressBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      completed:100,
    };
  }
  componentDidMount(){
    var outerThis = this;
    var sec = this.props.seconds;
    var diff = (100/sec)/10;
    var t = setInterval(function(){
      outerThis.setState({completed:outerThis.state.completed-diff});
      if(outerThis.state.completed===0)
      clearTimeout(t);
    },100)
  }
  render(){
  return(
    <div>
      <LinearProgress mode="determinate" value={this.state.completed} style={{height:this.props.height}} />
  </div>
  );
  }
};
ProgressBar.defaultProps={
  height:10,
  seconds:20
};
