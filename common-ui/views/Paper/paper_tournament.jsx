import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  width: "100%",
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor :'#FFEE58'

};

const list_style={
  marginTop:'5%',
  marginBottom:'5%'
}
// const style1 = {
// marginLeft :"30"
// };

export default class PaperTournament extends React.Component{

  render() {
    return (
      <div><Paper style={style} zDepth={2} >
      <div class = "style1">
      <h5 style={list_style}>Tournament Played :{this.props.analytics.contentPlayed}</h5>
      <Divider/>
      <h5 style={list_style}>Total No Of Players :{this.props.analytics.noOfPlayers}</h5>
      <Divider/>
      <h5 style={list_style}>Rank :{this.props.analytics.rank}</h5>
      <Divider/>
      <h5 style={list_style}>Score :{this.props.analytics.score}</h5>
      <Divider/>
      <h5 style={list_style}>Winning Streaks % :{this.props.analytics.winnigStreak}</h5>
      <Divider/>
      </div>
      </Paper>
      </div>
    );
  }
};
