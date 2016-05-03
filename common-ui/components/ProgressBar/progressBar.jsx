
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const h = {
  height:15
}
export default class ProgressBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      completed:100
    };
  }
  componentDidMount() {
    this.timer = setTimeout(() => this.progress(100),1000);
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed < 0) {
      this.setState({completed: 0});
    } else {
      this.setState({completed});
      this.timer = setTimeout(() => this.progress(completed - .6), 100);
    }
  }
  render(){
  return(
<LinearProgress mode="determinate" value={this.state.completed} style={h} />
  );
  }
};


module.exports = ProgressBar;
