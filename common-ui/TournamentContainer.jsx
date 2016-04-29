import React from 'react';
import TournamentCard from './TournamentCard';

var TournamentContainer = React.createClass({

  render: function(){
      var allTheTopics = [];
      this.props.topics.forEach(function(topic){
        allTheTopics.push(<TournamentCard topic={topic}/>);
      })
    return(

        <div>
        {allTheTopics}
        </div>


    );
  }
})

module.exports = TournamentContainer;
