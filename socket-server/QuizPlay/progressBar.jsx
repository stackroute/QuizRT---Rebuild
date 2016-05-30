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
    var diff = (100/sec);
    var i =0;

    var t = setInterval(function(){
      i=i+1;
      outerThis.setState({completed:outerThis.state.completed-diff});
      if(outerThis.state.completed===0 ){
        if(i === 2){
          clearInterval(t);

        }
        outerThis.setState({completed:100});

      }
    },1000)
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
