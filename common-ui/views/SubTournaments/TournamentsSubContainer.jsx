
import React from 'react';
import TournamentsSubCard from './TournamentsSubCard';
var API = require('../../../rest-server/json-server/api/api.js');
var TournamentsSubContainer = React.createClass({
  getInitialState: function(){
    return { tournament:[],
          allTheSubTopics:[]};
  },
 componentWillMount: function(){
   var temp=[];
   API.getAllTournaments(function(data){
     this.setState({tournament:data});
     this.state.tournament.forEach(function(tournament){
       temp.push(
         <div className="col-xs-12 col-lg-4 col-md-6 col-sm-6">
         <TournamentsSubCard tournament={tournament} key={tournament.title}/>
         </div>);

   })
     this.setState({allTheSubTopics:temp});
 }.bind(this))
},

  render: function(){

    return(
      <div className="container-fluid">
      <div className="row">
      {this.state.allTheSubTopics}
      </div>
      </div>
    );
  }

});


module.exports = TournamentsSubContainer;
