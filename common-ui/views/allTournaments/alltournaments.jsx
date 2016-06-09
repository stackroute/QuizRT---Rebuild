import React from 'react';
import ProfileHero from '../header/leftnav';
import TournamentsSubContainer from '../SubTournaments/TournamentsSubContainer';

const title={
  textAlign:'center'
}

var baseurl='http://localhost:8080';

var Tournaments = React.createClass({

  getInitialState:function(){
      return{tournamentData:[]}
  },

    componentDidMount:function(){
      $.ajax({
        url: baseurl+'/tournaments',
        dataType:'json',
        success: function(data){
          console.log('got success---------------------');
          console.log(JSON.stringify(data));
          this.setState({tournamentData:data})
          console.log('------------------------'+data+'----------------------');
        }.bind(this),
        error:function(err){
          console.log(err);
          console.log('error');
        }
      })
    },

  render: function(){
    return(
      <div>
      <ProfileHero />
        <h1 style={title}>Tournaments</h1>
        <TournamentsSubContainer tournament ={this.state.tournamentData} />
      </div>
    );
  }
});

export default Tournaments;
